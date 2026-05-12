import type { LucideIcon } from "lucide-react";

export function WhatWeDoItem({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] md:h-16 md:w-16">
        <Icon
          className="h-7 w-7 md:h-8 md:w-8"
          strokeWidth={1.35}
          stroke="url(#nx-icon-gradient)"
        />
      </div>
      <span className="max-w-[8rem] text-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-slate-300 md:max-w-none md:text-[11px]">
        {label}
      </span>
    </div>
  );
}
