const TONES = {
  good: 'bg-positive/12 text-positive',
  near: 'bg-warn/15 text-warn',
  over: 'bg-negative/12 text-negative',
  neutral: 'bg-surface-2 text-muted',
  positive: 'bg-positive/12 text-positive',
  negative: 'bg-negative/12 text-negative',
  warn: 'bg-warn/15 text-warn',
}

const LABELS = { good: 'Good', near: 'Near Limit', over: 'Over Limit' }

export function StatusBadge({ status }) {
  return (
    <span className={`chip ${TONES[status] || TONES.neutral}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABELS[status] || status}
    </span>
  )
}

export function Badge({ tone = 'neutral', children, className = '' }) {
  return (
    <span className={`chip ${TONES[tone] || TONES.neutral} ${className}`}>
      {children}
    </span>
  )
}
