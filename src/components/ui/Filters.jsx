import { Icon } from './Icon'

// Segmented pill filter (single-select).
export function SegmentedFilter({ options, value, onChange }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto rounded-lg bg-surface-2 p-0.5 no-scrollbar">
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value
        const label = typeof o === 'string' ? o : o.label
        return (
          <button
            key={v}
            onClick={() => onChange(v)}
            className={`whitespace-nowrap rounded-md px-3 py-1.5 text-[12px] font-semibold transition-colors ${
              value === v ? 'bg-brand text-brand-ink' : 'text-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export function SearchInput({ value, onChange, placeholder = 'Search…', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Icon name="Search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface py-2 pl-9 pr-3 text-sm placeholder:text-muted focus:outline-none"
      />
    </div>
  )
}

// Small summary tile for module page headers.
export function MiniStat({ label, value, tone }) {
  const color =
    tone === 'positive' ? 'text-positive' : tone === 'negative' ? 'text-negative' : 'text-ink'
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <div className="text-[11px] font-medium text-muted">{label}</div>
      <div className={`mt-0.5 text-lg font-extrabold tnum ${color}`}>{value}</div>
    </div>
  )
}
