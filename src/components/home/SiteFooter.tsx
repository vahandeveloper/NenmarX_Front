import Link from "next/link";

const CONTACT_EMAIL = "info@nenzet.com";
const WHATSAPP_E164 = "37477443388";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;

const cols = [
  {
    title: "Company",
    links: [
      { href: "#top", label: "About" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#capabilities", label: "Capabilities" },
      { href: "#process", label: "Process" },
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
              Nen<span className="text-cyan-400">Zet</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              B2B and B2C software for tour operators: products, bookings,
              prices, payments, documents, integrations, and analytics.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Get in touch
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-medium text-white transition hover:text-cyan-300"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-lg font-medium text-white transition hover:text-emerald-300"
                  aria-label="Chat on WhatsApp"
                >
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  WhatsApp · +374 77 44 33 88
                </a>
              </div>
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
          <p>© {new Date().getFullYear()} NenZet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
