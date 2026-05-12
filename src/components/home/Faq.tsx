const faqs = [
  {
    q: "What makes NenmarX different from a typical dev shop?",
    a: "We combine product clarity with delivery discipline — scope isn’t a guessing game, and releases stay tied to outcomes.",
  },
  {
    q: "Do I need a full specification before we talk?",
    a: "No. If you have an idea, pain points, or an existing system, we can help shape the roadmap and prioritize what ships first.",
  },
  {
    q: "How do you handle changing requirements?",
    a: "We expect change. Work is planned in short cycles with explicit trade-offs so priorities can evolve without derailing delivery.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes — APIs, legacy databases, identity providers, and cloud services are part of our day-to-day work.",
  },
  {
    q: "How do you communicate progress?",
    a: "A steady cadence of demos, written updates, and shared artifacts so stakeholders stay aligned.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-5 py-16 md:px-8 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-center text-slate-400">
          Still curious?{" "}
          <a href="#contact" className="font-medium text-cyan-400 hover:underline">
            Contact us
          </a>
          .
        </p>

        <div className="mt-12 space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-white/10 bg-white/[0.03] open:border-cyan-500/25 open:bg-white/[0.05]"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-left text-sm font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {q}
                  <span className="text-cyan-400 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/10 px-5 pb-4 pt-0 text-sm leading-relaxed text-slate-400">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
