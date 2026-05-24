export function NZLogo({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex select-none items-center justify-center ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 80"
        className="h-20 w-36 md:h-24 md:w-44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nx-n" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#00A8CC" />
          </linearGradient>
          <linearGradient id="nx-x" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B565D8" />
            <stop offset="100%" stopColor="#9D50BB" />
          </linearGradient>
        </defs>
        <text
          x="8"
          y="62"
          fontSize="64"
          fontWeight="800"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          fill="url(#nx-n)"
          letterSpacing="-0.06em"
        >
          N
        </text>
        <text
          x="52"
          y="62"
          fontSize="64"
          fontWeight="800"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          fill="url(#nx-x)"
          letterSpacing="-0.06em"
          opacity={0.98}
        >
          Z
        </text>
      </svg>
    </div>
  );
}
