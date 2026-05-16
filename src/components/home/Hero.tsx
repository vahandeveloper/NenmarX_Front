import Link from "next/link";

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
          Software · Web &amp; mobile · B2B &amp; B2C
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          Your partner for{" "}
          <span className="bg-gradient-to-r from-[#00D2FF] via-cyan-200 to-[#9D50BB] bg-clip-text text-transparent">
            products that scale
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 md:text-lg">
          We team up with teams that want clarity, speed, and production-grade
          engineering — from discovery to launch and beyond.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#00D2FF] to-[#9D50BB] px-8 py-3.5 text-sm font-semibold text-[#050810] shadow-[0_0_40px_-8px_rgba(0,210,255,0.45)] transition hover:brightness-110"
          >
            Start your digital journey
          </Link>
          <Link
            href="#capabilities"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
