import type { LucideIcon } from "lucide-react";

export function ValueItem({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-3 text-center sm:flex-row sm:gap-3 sm:text-left">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00D2FF]/15 to-[#9D50BB]/15">
        <Icon
          className="h-5 w-5"
          strokeWidth={1.5}
          stroke="url(#nx-icon-gradient)"
        />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-white md:text-[11px] md:tracking-[0.18em]">
          {title}
        </p>
        {subtitle ? (
          <p className="text-[10px] uppercase tracking-wide text-slate-500 md:text-[11px]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
