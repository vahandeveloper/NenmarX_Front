import { ArrowRight, Building2, Cpu, Globe2, Network } from "lucide-react";

const areas = [
  {
    icon: Cpu,
    title: "B2B platforms",
    body: "Workflows, integrations, and admin consoles built for operational scale.",
  },
  {
    icon: Globe2,
    title: "Customer-facing products",
    body: "Web and mobile experiences optimized for conversion and retention.",
  },
  {
    icon: Building2,
    title: "Public sector & enterprise",
    body: "Compliance-aware delivery with maintainability as a priority.",
  },
  {
    icon: Network,
    title: "Connectivity & IoT-ready apps",
    body: "Reliable clients for devices, partners, and third-party ecosystems.",
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Focus areas
          </h2>
          <p className="mt-4 text-slate-400">
            Where we bring the most leverage — across industries and product
            stages.
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
              <p className="mt-3 flex-grow text-slate-400">{body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition group-hover:gap-3">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
