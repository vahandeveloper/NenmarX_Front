import { Gauge, Rocket, Search, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & alignment",
    body: "Goals, constraints, and success metrics — before architecture decisions.",
  },
  {
    icon: Gauge,
    title: "Design & development",
    body: "Short cycles with visible progress, reviews, and tight feedback loops.",
  },
  {
    icon: Rocket,
    title: "Test & launch",
    body: "Performance, security, and usability checks before production traffic.",
  },
  {
    icon: Wrench,
    title: "Support & iteration",
    body: "Monitoring, improvements, and roadmap support after go-live.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Our delivery process
          </h2>
          <p className="mt-4 text-slate-400">
            Structured phases with clear ownership — decisions become working
            software with measurable checkpoints.
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

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#00D2FF]/10 via-[#0a1020] to-[#9D50BB]/15 px-8 py-12 text-center md:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,210,255,0.15),transparent_50%)]"
            aria-hidden
          />
          <p className="relative text-lg font-medium text-white md:text-xl">
            Focus on growth — we own the technology execution.
          </p>
          <a
            href="#contact"
            className="relative mt-6 inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
