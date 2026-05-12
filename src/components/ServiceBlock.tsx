import type { LucideIcon } from "lucide-react";

type Accent = "blue" | "purple";

const accentStyles: Record<
  Accent,
  { heading: string; iconStroke: string }
> = {
  blue: {
    heading: "text-[#00D2FF]",
    iconStroke: "#00D2FF",
  },
  purple: {
    heading: "text-[#9D50BB]",
    iconStroke: "#9D50BB",
  },
};

export function ServiceBlock({
  accent,
  icon: Icon,
  title,
  description,
}: {
  accent: Accent;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  const a = accentStyles[accent];
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <Icon
          className="h-9 w-9"
          strokeWidth={1.5}
          style={{ stroke: a.iconStroke }}
        />
      </div>
      <h2
        className={`mb-2 text-lg font-bold uppercase tracking-[0.12em] md:text-xl ${a.heading}`}
      >
        {title}
      </h2>
      <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
        {description}
      </p>
    </div>
  );
}
