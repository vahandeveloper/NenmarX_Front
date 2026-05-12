const stories = [
  {
    title: "Payments hub for hospitality",
    sector: "Commerce",
    outcome:
      "Unified checkout and partner integrations with operational dashboards.",
  },
  {
    title: "Compliance reporting platform",
    sector: "Financial services",
    outcome:
      "Centralized reporting with audit trails across regions and entities.",
  },
  {
    title: "Field operations suite",
    sector: "Logistics",
    outcome:
      "Mobile-first workflows with offline resilience and real-time sync.",
  },
];

export function Stories() {
  return (
    <section id="stories" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Client stories
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Representative engagements — names anonymized where needed.
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Discuss your case →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
                {s.sector}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400">
                {s.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
