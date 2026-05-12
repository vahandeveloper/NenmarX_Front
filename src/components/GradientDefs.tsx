/** Shared SVG defs for gradient strokes (Lucide icons). */
export function GradientDefs() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="nx-icon-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#9D50BB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
