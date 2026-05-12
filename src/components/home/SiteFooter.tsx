import Link from "next/link";

const cols = [
  {
    title: "Company",
    links: [
      { href: "#top", label: "About" },
      { href: "#stories", label: "Work" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#capabilities", label: "Capabilities" },
      { href: "#process", label: "Process" },
      { href: "#why", label: "Why NenmarX" },
    ],
  },
  {
    title: "Focus",
    links: [
      { href: "#focus", label: "Focus areas" },
      { href: "#capabilities", label: "Engineering" },
      { href: "#contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-[#03060d] px-5 py-16 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="#top" className="text-xl font-semibold text-white">
              Nenmar<span className="text-cyan-400">X</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Strategic software development — web, mobile, and cloud — with the
              rigor your users and stakeholders expect.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Get in touch
              </p>
              <a
                href="mailto:hello@nenmarx.com"
                className="mt-2 block text-lg font-medium text-white hover:text-cyan-300"
              >
                hello@nenmarx.com
              </a>
              <p className="mt-4 text-xs text-slate-500">
                Replace with your real email / form handler when ready.
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-sm text-slate-400 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-slate-500 md:text-left">
          <p>© {new Date().getFullYear()} NenmarX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
