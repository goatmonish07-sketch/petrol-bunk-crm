import { Icon } from './Icon'

// Field renderer for entry forms. Rendered on a dark "entry" card, so inputs
// use a translucent light style. `onDark` toggles the palette.
export function Field({ field, value, onChange, onDark = true }) {
  const base = onDark
    ? 'w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-brand-ink placeholder:text-brand-ink/45 focus:border-white/40 focus:outline-none'
    : 'w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none'
  const labelCls = onDark ? 'text-[11px] font-semibold text-brand-ink/70' : 'text-[11px] font-semibold text-muted'

  const set = (v) => onChange(field.name, v)

  return (
    <div className={field.colSpan === 2 ? 'sm:col-span-2' : ''}>
      {field.type !== 'radio' && (
        <label className={`mb-1 block ${labelCls}`}>
          {field.label}
          {field.required && <span className="ml-0.5 text-negative">*</span>}
        </label>
      )}

      {field.type === 'select' ? (
        <div className="relative">
          <select value={value || ''} onChange={(e) => set(e.target.value)} className={`${base} appearance-none pr-9`}>
            <option value="">{field.placeholder || `Select ${field.label}`}</option>
            {field.options.map((o) => (
              <option key={o} value={o} className="text-ink">{o}</option>
            ))}
          </select>
          <Icon name="ChevronDown" className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/60" />
        </div>
      ) : field.type === 'textarea' ? (
        <textarea rows={2} value={value || ''} onChange={(e) => set(e.target.value)} placeholder={field.placeholder || field.label} className={base} />
      ) : field.type === 'radio' ? (
        <div>
          <label className={`mb-1 block ${labelCls}`}>{field.label}</label>
          <div className="flex items-center gap-4 py-1.5">
            {field.options.map((o) => (
              <label key={o} className="flex cursor-pointer items-center gap-2 text-sm text-brand-ink">
                <input type="radio" name={field.name} checked={value === o} onChange={() => set(o)} className="accent-petrol" />
                {o}
              </label>
            ))}
          </div>
        </div>
      ) : field.type === 'file' ? (
        <label className={`${base} flex cursor-pointer items-center gap-2`}>
          <Icon name="Upload" className="h-4 w-4 text-brand-ink/60" />
          <span className="text-brand-ink/60">{value || 'Browse — JPG / PNG'}</span>
          <input type="file" className="hidden" onChange={(e) => set(e.target.files?.[0]?.name || '')} />
        </label>
      ) : (
        <input
          type={field.type === 'date' ? 'date' : field.type === 'number' ? 'number' : 'text'}
          value={value || ''}
          onChange={(e) => set(e.target.value)}
          placeholder={field.placeholder || field.label}
          className={base}
        />
      )}
    </div>
  )
}
