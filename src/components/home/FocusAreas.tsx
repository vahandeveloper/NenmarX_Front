import { Building2, Cpu, Globe2, Network } from "lucide-react";

const areas = [
  {
    icon: Cpu,
    title: "Online booking system",
    body: "Search tours, book packages, manage applications, view stop-sales, offers, and availability.",
  },
  {
    icon: Globe2,
    title: "Agency personal account",
    body: "A secure cabinet for agencies to manage orders, print documents, track payments, and communicate.",
  },
  {
    icon: Building2,
    title: "Documents and payments",
    body: "Vouchers, contracts, invoices, insurance, payment tracking, online payments, and accounting exports.",
  },
  {
    icon: Network,
    title: "Data exchange and integrations",
    body: "Import/export for hotels, services, prices, XML/XLS data, partner operators, GDS, CRM, and banks.",
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Core modules
          </h2>
          <p className="mt-4 text-slate-400">
            The same kind of operational data structure used by modern tour
            operator automation systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {areas.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#0a1020]/60 p-8 transition hover:border-cyan-500/30"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D2FF]/20 to-[#9D50BB]/20">
                <Icon className="h-6 w-6 text-cyan-200" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
