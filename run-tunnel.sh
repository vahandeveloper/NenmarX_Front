#!/usr/bin/env bash
# Runs a Cloudflare named tunnel for nenzet.com in a dedicated tmux session,
# routing the public hostname -> http://localhost:$PORT (the Next.js dev server).
#
# The nenzet.com -> http://localhost:3000 public-hostname mapping is configured
# ONCE in the Cloudflare Zero Trust dashboard (Networks > Tunnels). Here we just
# run the connector with the token, exactly like the crypto bot's mini-app tunnel.
#
# Token resolution order:
#   1. $NENZET_CF_TUNNEL_TOKEN environment variable
#   2. NENZET_CF_TUNNEL_TOKEN=... line in ./tunnel.env (this dir, git-ignored)
set -euo pipefail

SESSION="nenzet_tunnel"
PORT="${PORT:-3000}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG="$PROJECT_DIR/tunnel.log"
ENV_FILE="$PROJECT_DIR/tunnel.env"

cd "$PROJECT_DIR"

# Load token from tunnel.env if not already in the environment.
if [ -z "${NENZET_CF_TUNNEL_TOKEN:-}" ] && [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  set -a; . "$ENV_FILE"; set +a
fi

if ! command -v cloudflared >/dev/null 2>&1; then
  echo "ERROR: cloudflared not found on \$PATH." >&2
  exit 1
fi
if [ -z "${NENZET_CF_TUNNEL_TOKEN:-}" ]; then
  echo "ERROR: NENZET_CF_TUNNEL_TOKEN is not set." >&2
  echo "  Put it in $ENV_FILE as: NENZET_CF_TUNNEL_TOKEN=<token>" >&2
  echo "  (or export it before running this script)." >&2
  exit 1
fi

# Make sure the local dev server is actually up first.
if ! curl -s -o /dev/null --max-time 3 "http://localhost:$PORT"; then
  echo "WARNING: nothing responding on http://localhost:$PORT — start the site first (./run-nenzet.sh)." >&2
fi

# Recreate the tmux session cleanly.
if tmux has-session -t "$SESSION" 2>/dev/null; then
  echo "Killing existing tmux session '$SESSION'..."
  tmux kill-session -t "$SESSION"
fi

: > "$LOG"
echo "Starting Cloudflare tunnel for nenzet.com -> http://localhost:$PORT ..."
tmux new-session -d -s "$SESSION" -c "$PROJECT_DIR" \
  "stdbuf -oL cloudflared tunnel --no-autoupdate run --token $NENZET_CF_TUNNEL_TOKEN 2>&1 | tee $LOG; echo 'Tunnel stopped. Press any key to close...'; read -n 1"

# Wait up to 30s for the connector to register.
ready=""
for _ in $(seq 1 30); do
  sleep 1
  if grep -qiE 'Registered tunnel connection' "$LOG" 2>/dev/null; then ready=1; break; fi
  if grep -qiE 'error parsing token|Unauthorized|invalid token|failed to' "$LOG" 2>/dev/null; then break; fi
done

if [ -z "$ready" ]; then
  echo "ERROR: cloudflared did not register in 30s. Last log lines:" >&2
  tail -20 "$LOG" 2>/dev/null || true
  exit 1
fi

echo
echo "Tunnel live. nenzet.com is now routed to this machine."
echo "  Open:    https://nenzet.com"
echo "  Logs:    tmux capture-pane -pt $SESSION   (or: tail -f $LOG)"
echo "  Attach:  tmux attach -t $SESSION"
echo "  Stop:    tmux kill-session -t $SESSION"
