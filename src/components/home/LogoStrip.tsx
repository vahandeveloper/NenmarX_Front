const placeholders = [
  "Enterprise",
  "Fintech",
  "Health",
  "Retail",
  "Logistics",
  "SaaS",
];

export function LogoStrip() {
  return (
    <section className="border-y border-white/10 bg-black/20 py-10 md:py-12">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Trusted by teams who ship
      </p>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-5 opacity-80 md:gap-x-14">
        {placeholders.map((name) => (
          <span
            key={name}
            className="text-sm font-semibold uppercase tracking-widest text-slate-500"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
