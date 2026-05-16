import {
  Brain,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const badges = [
  "Security-minded delivery",
  "Cloud-ready architecture",
  "Short agile cycles",
  "Transparent communication",
];

const pillars = [
  {
    icon: Brain,
    title: "Product thinking",
    body: "We align scope with outcomes before writing code — fewer surprises late in the cycle.",
  },
  {
    icon: Cpu,
    title: "Engineering depth",
    body: "Solid foundations for APIs, data, and integrations that survive real traffic.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Repeatable environments, observability, and predictable releases.",
  },
  {
    icon: Smartphone,
    title: "Web & mobile",
    body: "Consistent UX across channels with performance as a first-class concern.",
  },
  {
    icon: Layers,
    title: "Modernization",
    body: "Strangle legacy safely — incremental refactors with measurable risk reduction.",
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
            End-to-end{" "}
            <span className="bg-gradient-to-r from-[#00D2FF] to-[#9D50BB] bg-clip-text text-transparent">
              software delivery
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A consulting-led approach with engineering discipline — from startups
            scaling fast to teams modernizing core systems.
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
