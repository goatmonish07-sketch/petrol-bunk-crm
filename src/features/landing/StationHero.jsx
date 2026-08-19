// Illustrated fuel-station scene (SVG) used behind the floating dashboard preview.
// Pure CSS/SVG so it needs no external image and adapts to light/dark.
export function StationHero() {
  return (
    <svg viewBox="0 0 600 460" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--brand))" stopOpacity="0.95" />
          <stop offset="55%" stopColor="rgb(var(--brand))" stopOpacity="0.75" />
          <stop offset="100%" stopColor="rgb(var(--petrol))" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--surface-2))" />
          <stop offset="100%" stopColor="rgb(var(--bg))" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="600" height="460" fill="url(#sky)" />
      {/* sun glow */}
      <circle cx="470" cy="120" r="90" fill="rgb(var(--petrol))" opacity="0.25" />

      {/* ground */}
      <rect y="330" width="600" height="130" fill="url(#ground)" />

      {/* canopy */}
      <g>
        <rect x="120" y="150" width="360" height="34" rx="6" fill="rgb(var(--brand))" />
        <rect x="120" y="150" width="360" height="10" rx="5" fill="rgb(var(--petrol))" opacity="0.85" />
        {/* pillars */}
        <rect x="150" y="184" width="16" height="150" fill="rgb(var(--brand))" opacity="0.9" />
        <rect x="434" y="184" width="16" height="150" fill="rgb(var(--brand))" opacity="0.9" />
        {/* drop badge on canopy */}
        <circle cx="300" cy="167" r="12" fill="rgb(var(--petrol))" />
        <path d="M300 160c2.4 3 4 5.2 4 7.4a4 4 0 1 1-8 0c0-2.2 1.6-4.4 4-7.4z" fill="rgb(var(--brand))" />
      </g>

      {/* fuel pump */}
      <g transform="translate(360 214)">
        <rect x="0" y="0" width="62" height="120" rx="8" fill="rgb(var(--surface))" stroke="rgb(var(--border))" />
        <rect x="10" y="12" width="42" height="30" rx="4" fill="rgb(var(--brand))" opacity="0.9" />
        <rect x="14" y="17" width="34" height="7" rx="2" fill="rgb(var(--petrol))" />
        <rect x="14" y="28" width="24" height="6" rx="2" fill="rgb(var(--diesel))" opacity="0.8" />
        <rect x="14" y="56" width="34" height="10" rx="3" fill="rgb(var(--surface-2))" />
        <rect x="14" y="72" width="34" height="10" rx="3" fill="rgb(var(--surface-2))" />
        {/* nozzle hose */}
        <path d="M62 40 q24 6 20 40" fill="none" stroke="rgb(var(--brand))" strokeWidth="4" opacity="0.7" />
      </g>

      {/* car silhouette */}
      <g transform="translate(150 250)" fill="rgb(var(--surface))" stroke="rgb(var(--border))">
        <path d="M0 60 q10 -46 60 -48 l60 -2 q40 0 60 30 l30 8 q16 4 16 20 l0 22 -226 0 z" />
        <circle cx="52" cy="92" r="20" fill="rgb(var(--brand))" />
        <circle cx="52" cy="92" r="8" fill="rgb(var(--surface))" />
        <circle cx="196" cy="92" r="20" fill="rgb(var(--brand))" />
        <circle cx="196" cy="92" r="8" fill="rgb(var(--surface))" />
      </g>
    </svg>
  )
}
