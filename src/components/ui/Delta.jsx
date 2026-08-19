import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

// Up/down delta vs previous period.
export function Delta({ value, suffix = 'vs Yesterday', compact = false }) {
  const up = value >= 0
  const Icon = up ? ArrowUpRight : ArrowDownRight
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={`inline-flex items-center gap-0.5 text-[12px] font-semibold tnum ${
          up ? 'text-positive' : 'text-negative'
        }`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
        {Math.abs(value).toFixed(1)}%
      </span>
      {!compact && <span className="text-[11px] text-muted">{suffix}</span>}
    </div>
  )
}
