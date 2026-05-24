"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#focus", label: "Our focus" },
  { href: "#capabilities", label: "Services" },
  { href: "#process", label: "How we work" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050810]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="#top"
          className="flex items-baseline gap-0.5 text-lg font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span>Nen</span>
          <span className="bg-gradient-to-r from-[#00D2FF] to-[#9D50BB] bg-clip-text text-transparent">
            Zet
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#00D2FF] to-[#7a3fa0] px-4 py-2 text-sm font-semibold text-[#050810] shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
          >
            Call / write
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/15 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#050810]/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#7a3fa0] px-4 py-3 text-center text-sm font-semibold text-[#050810]"
              onClick={() => setOpen(false)}
            >
              Call / write
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
