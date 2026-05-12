const stats = [
  { value: "10+", label: "Years shipping products" },
  { value: "120+", label: "Experts across disciplines" },
  { value: "350+", label: "Projects delivered" },
  { value: "4+", label: "Years avg. partnerships" },
  { value: "100%", label: "Commitment to delivery" },
];

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-b from-[#050810] to-[#080d18] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-4xl font-semibold tabular-nums text-white md:text-5xl">
              {value}
            </p>
            <p className="mt-2 text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
