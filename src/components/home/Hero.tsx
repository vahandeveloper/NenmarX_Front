export function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 pb-10 pt-28 md:px-8 md:pb-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(0,210,255,0.18),transparent_55%),radial-gradient(ellipse_50%_45%_at_90%_30%,rgba(157,80,187,0.12),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
          Tour operator automation · B2B &amp; B2C
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          Software for tourism{" "}
          <span className="bg-gradient-to-r from-[#00D2FF] via-cyan-200 to-[#9D50BB] bg-clip-text text-transparent">
            sales and operations
          </span>
        </h1>
      </div>
    </section>
  );
}
