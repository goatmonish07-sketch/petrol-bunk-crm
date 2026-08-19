import { cssVar } from '../../lib/constants'

// Circular ring gauge (SVG). pct 0..100. Optional reorder marker.
export function Gauge({
  pct,
  size = 92,
  stroke = 9,
  token = '--data',
  reorderPct = null,
  label,
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const clamped = Math.max(0, Math.min(100, pct))
  const offset = c - (clamped / 100) * c
  const center = size / 2

  // reorder marker angle (starts at top, clockwise)
  let marker = null
  if (reorderPct != null) {
    const a = (reorderPct / 100) * 2 * Math.PI - Math.PI / 2
    marker = {
      x: center + r * Math.cos(a),
      y: center + r * Math.sin(a),
    }
  }

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center} cy={center} r={r}
          fill="none" stroke={cssVar('--border')} strokeWidth={stroke}
        />
        <circle
          cx={center} cy={center} r={r}
          fill="none" stroke={cssVar(token)} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 700ms ease' }}
        />
        {marker && (
          <circle
            cx={marker.x} cy={marker.y} r={stroke / 2.1}
            fill={cssVar('--negative')} stroke={cssVar('--surface')} strokeWidth={1.5}
          />
        )}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-extrabold tnum leading-none">{Math.round(clamped)}%</span>
        {label && <span className="mt-0.5 text-[10px] text-muted">{label}</span>}
      </div>
    </div>
  )
}
