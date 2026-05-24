const CONTACT_EMAIL = "info@nenzet.com";
const CONTACT_PHONE_DISPLAY = "+374 77 44 33 88";
const CONTACT_PHONE_HREF = "tel:+37477443388";
const WHATSAPP_URL = "https://wa.me/37477443388";

export function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 pb-12 pt-28 md:px-8 md:pb-16"
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
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 md:text-lg">
          Need a B2B or B2C system for a travel company? Call or write us, and
          we will discuss what should be built first.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CONTACT_PHONE_HREF}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#00D2FF] to-[#9D50BB] px-7 py-3.5 text-sm font-semibold text-[#050810] shadow-[0_0_40px_-8px_rgba(0,210,255,0.55)] transition hover:brightness-110"
          >
            Call {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-400/10 px-7 py-3.5 text-sm font-semibold text-emerald-200 backdrop-blur-sm transition hover:border-emerald-300/60 hover:bg-emerald-400/15"
          >
            Write on WhatsApp
          </a>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-5 inline-flex text-sm font-medium text-slate-400 transition hover:text-cyan-300"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
