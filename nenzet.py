#!/usr/bin/env python3
"""nenzet.com control script — start / stop / restart / status / logs.

Manages two tmux sessions:
  * nenzet         -> the Next.js site  (run-nenzet.sh)
  * nenzet_tunnel  -> the Cloudflare tunnel for nenzet.com (run-tunnel.sh)

Usage:
    ./nenzet.py start            # start site, then tunnel (skips ones already up)
    ./nenzet.py stop             # stop both
    ./nenzet.py restart          # stop both, start both fresh
    ./nenzet.py status           # what's alive + HTTP health checks
    ./nenzet.py logs site        # recent stdout from the site session
    ./nenzet.py logs tunnel      # recent stdout from the tunnel session

    # target just one component:
    ./nenzet.py start site
    ./nenzet.py restart tunnel

Env:
    PORT   dev-server port (default 3000); forwarded to the bash scripts.
"""
from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path
from urllib.request import Request, urlopen

HERE = Path(__file__).resolve().parent
PORT = os.environ.get("PORT", "3000")

# component -> (tmux session name, launcher script)
COMPONENTS = {
    "site": ("nenzet", HERE / "run-nenzet.sh"),
    "tunnel": ("nenzet_tunnel", HERE / "run-tunnel.sh"),
}
ORDER = ["site", "tunnel"]  # start order; stop happens in reverse

# ANSI colours (skipped when not a tty)
_TTY = sys.stdout.isatty()
def _c(code: str, s: str) -> str:
    return f"\033[{code}m{s}\033[0m" if _TTY else s
def ok(s: str) -> str:    return _c("32", s)
def warn(s: str) -> str:  return _c("33", s)
def err(s: str) -> str:   return _c("31", s)
def bold(s: str) -> str:  return _c("1", s)


def _require_tmux() -> None:
    if not shutil.which("tmux"):
        sys.exit(err("tmux is not installed or not on $PATH."))


def session_alive(session: str) -> bool:
    return subprocess.run(
        ["tmux", "has-session", "-t", session],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    ).returncode == 0


def kill_session(session: str) -> None:
    subprocess.run(
        ["tmux", "kill-session", "-t", session],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )


def http_ok(url: str, timeout: float = 4.0) -> int | None:
    """Return HTTP status code, or None if unreachable.

    Sends a browser-like User-Agent — Cloudflare 403s the default
    ``Python-urllib`` agent, which would otherwise look like the site is down.
    """
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (nenzet-healthcheck)"})
    try:
        with urlopen(req, timeout=timeout) as r:
            return r.status
    except Exception as e:  # noqa: BLE001 - any failure means "not serving"
        code = getattr(e, "code", None)
        return int(code) if code else None


def run_launcher(script: Path) -> bool:
    """Run a launcher bash script, streaming its output. Returns success."""
    if not script.exists():
        print(err(f"  launcher not found: {script}"))
        return False
    env = {**os.environ, "PORT": PORT}
    proc = subprocess.run(["bash", str(script)], cwd=HERE, env=env)
    return proc.returncode == 0


# ----------------------------------------------------------------- commands
def cmd_start(targets: list[str]) -> int:
    _require_tmux()
    rc = 0
    for name in targets:
        session, script = COMPONENTS[name]
        if session_alive(session):
            print(ok(f"• {name}: already running (tmux '{session}') — skipping"))
            continue
        print(bold(f"• starting {name} ..."))
        if not run_launcher(script):
            print(err(f"  {name} failed to start"))
            rc = 1
    return rc


def cmd_stop(targets: list[str]) -> int:
    _require_tmux()
    # stop in reverse of start order so the tunnel goes before the site
    for name in [n for n in reversed(ORDER) if n in targets]:
        session, _ = COMPONENTS[name]
        if session_alive(session):
            kill_session(session)
            print(ok(f"• stopped {name} (tmux '{session}')"))
        else:
            print(warn(f"• {name}: not running"))
    return 0


def cmd_restart(targets: list[str]) -> int:
    cmd_stop(targets)
    # brief pause so ports/sessions are fully released before relaunch
    time.sleep(1.0)
    return cmd_start(targets)


def cmd_status(_targets: list[str]) -> int:
    _require_tmux()
    print(bold("nenzet.com services"))
    site_session = COMPONENTS["site"][0]
    tun_session = COMPONENTS["tunnel"][0]

    site_up = session_alive(site_session)
    tun_up = session_alive(tun_session)
    print(f"  site   (tmux '{site_session}'):   "
          + (ok("running") if site_up else err("stopped")))
    print(f"  tunnel (tmux '{tun_session}'): "
          + (ok("running") if tun_up else err("stopped")))

    print(bold("\nhealth checks"))
    local = http_ok(f"http://localhost:{PORT}")
    print(f"  http://localhost:{PORT}  -> "
          + (ok(f"HTTP {local}") if local == 200 else err(str(local))))
    pub = http_ok("https://nenzet.com")
    print("  https://nenzet.com       -> "
          + (ok(f"HTTP {pub}") if pub == 200 else err(str(pub))))
    return 0


def cmd_logs(targets: list[str]) -> int:
    _require_tmux()
    for name in targets:
        session, _ = COMPONENTS[name]
        print(bold(f"=== {name} ({session}) ==="))
        if not session_alive(session):
            print(warn("  not running"))
            continue
        out = subprocess.run(
            ["tmux", "capture-pane", "-pt", session, "-S", "-200"],
            capture_output=True, text=True,
        )
        print(out.stdout.rstrip() or warn("  (no output captured)"))
    return 0


def main() -> int:
    p = argparse.ArgumentParser(
        description="Control the nenzet.com site and Cloudflare tunnel.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="component is one of: site, tunnel, all (default: all)",
    )
    p.add_argument("action",
                   choices=["start", "stop", "restart", "status", "logs"])
    p.add_argument("component", nargs="?", default="all",
                   choices=["site", "tunnel", "all"])
    args = p.parse_args()

    targets = ORDER if args.component == "all" else [args.component]

    return {
        "start": cmd_start,
        "stop": cmd_stop,
        "restart": cmd_restart,
        "status": cmd_status,
        "logs": cmd_logs,
    }[args.action](targets)


if __name__ == "__main__":
    raise SystemExit(main())
