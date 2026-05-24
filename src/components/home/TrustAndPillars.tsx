import {
  Brain,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const badges = [
  "Tour packages",
  "Online booking",
  "Agency cabinet",
  "Payments & documents",
];

const pillars = [
  {
    icon: Brain,
    title: "Tour product management",
    body: "Create and manage tour packages, routes, services, quotas, and special offers in one system.",
  },
  {
    icon: Cpu,
    title: "Order & booking workflows",
    body: "Handle simple and complex requests, customer applications, agency bookings, and operational status.",
  },
  {
    icon: Cloud,
    title: "Pricing and price lists",
    body: "Calculate prices with markups, commissions, discounts, early booking rules, and export-ready price lists.",
  },
  {
    icon: Smartphone,
    title: "B2B and B2C sales",
    body: "Online booking for agencies, direct customer sales, personal accounts, and mobile-friendly flows.",
  },
  {
    icon: Layers,
    title: "Integrations & reporting",
    body: "Connect payments, accounting, partners, GDS, CRM, imports, exports, analytics, and notifications.",
  },
];

export function TrustAndPillars() {
  return (
    <section id="capabilities" className="scroll-mt-24 px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 md:mb-14 md:gap-4">
          {badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300"
            >
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-cyan-400"
                strokeWidth={2}
              />
              {b}
            </span>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Automation for{" "}
            <span className="bg-gradient-to-r from-[#00D2FF] to-[#9D50BB] bg-clip-text text-transparent">
              tour operators
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            One platform concept for product creation, booking management,
            online sales, partner workflows, payments, documents, and analytics.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition hover:border-cyan-500/25 hover:shadow-[0_0_40px_-12px_rgba(0,210,255,0.35)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D2FF]/20 to-[#9D50BB]/20 text-cyan-200">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
