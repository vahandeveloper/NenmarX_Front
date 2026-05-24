import {
  BarChart3,
  Boxes,
  Calculator,
  CreditCard,
  FileText,
  HandCoins,
  Landmark,
  Layers3,
  Plane,
  Repeat,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

const benefits = [
  {
    icon: Boxes,
    title: "Tour Product Management",
  },
  {
    icon: ShoppingCart,
    title: "Sales Management",
  },
  {
    icon: Calculator,
    title: "Flexible Pricing",
  },
  {
    icon: FileText,
    title: "Document Management",
  },
  {
    icon: HandCoins,
    title: "Partner & Customer Payments",
  },
  {
    icon: BarChart3,
    title: "Reports, Statistics & Analytics",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Integrations",
  },
  {
    icon: Plane,
    title: "GDS Integration",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
  },
  {
    icon: Repeat,
    title: "Operator-to-Operator Exchange",
  },
  {
    icon: Layers3,
    title: "Dynamic Bundling",
  },
  {
    icon: Landmark,
    title: "Dynamic Pricing",
  },
];

export function Benefits() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Benefits for tour operators
          </h2>
          <p className="mt-4 text-slate-400">
            Practical tools for managing tourism products, sales, partner
            workflows, payments, documents, and analytics in one digital
            ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-500/30 hover:bg-white/[0.055]"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D2FF]/15 to-[#9D50BB]/15 text-cyan-200 transition group-hover:text-cyan-100">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <h3 className="text-sm font-semibold leading-snug text-white">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
