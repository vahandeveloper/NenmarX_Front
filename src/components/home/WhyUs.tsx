import {
  MessageSquare,
  Radar,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Outcome-driven delivery",
    body: "We define what “done” means with metrics your stakeholders care about.",
  },
  {
    icon: Radar,
    title: "Consulting-first clarity",
    body: "Alignment before build — scope, risks, and trade-offs are explicit.",
  },
  {
    icon: Shield,
    title: "Secure by design",
    body: "Threat modeling, least privilege, and sensible defaults for production.",
  },
  {
    icon: Zap,
    title: "Structured agility",
    body: "Small batches, predictable releases, and room to adapt without chaos.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    body: "Weekly rhythm, surfaced risks, and documentation you can actually use.",
  },
  {
    icon: Sparkles,
    title: "Continuous improvement",
    body: "We refine playbooks so every engagement benefits from lessons learned.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Why teams choose NenmarX
          </h2>
          <p className="mt-4 text-slate-400">
            Strategy and execution in one partnership — fewer handoffs, clearer
            accountability.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#00D2FF]/15 to-[#9D50BB]/15 p-2.5">
                <Icon
                  className="h-5 w-5 text-cyan-200"
                  strokeWidth={1.5}
                  stroke="url(#nx-icon-gradient)"
                />
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
