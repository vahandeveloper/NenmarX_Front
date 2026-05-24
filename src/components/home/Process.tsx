import { Gauge, Rocket, Search, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Catalog setup",
    body: "Destinations, hotels, services, routes, quotas, packages, and special offers.",
  },
  {
    icon: Gauge,
    title: "Pricing logic",
    body: "Price lists, markups, commissions, discounts, early booking, and partner terms.",
  },
  {
    icon: Rocket,
    title: "Sales workflow",
    body: "B2B agency booking, B2C direct booking, applications, payments, and documents.",
  },
  {
    icon: Wrench,
    title: "Operations & analytics",
    body: "Reports, statistics, notifications, accounting exports, partner exchange, and support.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            How the data is organized
          </h2>
          <p className="mt-4 text-slate-400">
            From tourism product data to bookings, payments, documents,
            integrations, and management reports.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="relative rounded-2xl border border-white/10 bg-[#0a1020]/80 p-6 backdrop-blur-sm"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-cyan-300">
                {i + 1}
              </span>
              <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-[#00D2FF]/15 to-[#9D50BB]/15 p-2">
                <Icon className="h-5 w-5 text-cyan-200" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
