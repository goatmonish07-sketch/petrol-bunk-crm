import { useMemo, useState } from 'react'
import { Card } from '../../components/ui/Card'
import { DataTable } from '../../components/ui/DataTable'
import { SearchInput } from '../../components/ui/Filters'
import { Field } from '../../components/ui/Field'
import { Badge, StatusBadge } from '../../components/ui/Badge'
import { Icon } from '../../components/ui/Icon'
import { formatINR, formatNumber, formatInt } from '../../lib/format'

function fmt(col, row) {
  const v = row[col.key]
  switch (col.format) {
    case 'inr': return formatINR(v)
    case 'inrWhole': return formatINR(v, { whole: true })
    case 'ltr': return v == null ? '—' : `${formatNumber(v, 2)} L`
    case 'number': return v == null ? '—' : formatInt(v)
    default: return v == null || v === '' ? '—' : v
  }
}

// Config-driven operational screen: breadcrumb, entry form, filters, export + table.
export function RecordScreen({ config }) {
  const [form, setForm] = useState({})
  const [rows, setRows] = useState(config.table?.rows || [])
  const [q, setQ] = useState('')
  const [toast, setToast] = useState(false)

  const onField = (name, value) => setForm((f) => ({ ...f, [name]: value }))

  const save = () => {
    if (config.form && config.table) {
      const row = { id: `new-${Date.now()}`, sno: rows.length + 1, _new: true }
      config.table.columns.forEach((c) => {
        if (form[c.key] != null && form[c.key] !== '') row[c.key] = form[c.key]
      })
      // sensible defaults
      if (config.table.columns.some((c) => c.key === 'date') && !row.date) {
        row.date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      }
      setRows((r) => [row, ...r])
    }
    setForm({})
    setToast(true)
    setTimeout(() => setToast(false), 2600)
  }

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return rows
    return rows.filter((r) => Object.values(r).some((v) => String(v).toLowerCase().includes(query)))
  }, [rows, q])

  const columns = (config.table?.columns || []).map((c) => ({
    ...c,
    render:
      c.render ||
      (c.format === 'status'
        ? (r) => <StatusBadge status={r[c.key]} />
        : c.format === 'badge'
        ? (r) => <Badge tone={c.tone?.(r) || 'neutral'}>{r[c.key]}</Badge>
        : c.format === 'crdr'
        ? (r) => (r[c.key] ? <span className={c.key === 'debit' ? 'text-negative' : 'text-positive'}>{formatINR(r[c.key], { whole: true })}</span> : '—')
        : (r) => fmt(c, r)),
  }))

  return (
    <div className="space-y-4">
      {/* Breadcrumb + title */}
      <div>
        <div className="mb-1 flex items-center gap-1.5 text-[12px] text-muted">
          <Icon name="LayoutDashboard" className="h-3.5 w-3.5" />
          Dashboard <Icon name="ChevronRight" className="h-3 w-3" /> <span className="text-ink">{config.title}</span>
        </div>
        <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">{config.title}</h1>
        {config.blurb && <p className="mt-0.5 text-sm text-muted">{config.blurb}</p>}
      </div>

      {/* Entry form (dark accent card, like the app's blue form) */}
      {config.form && (
        <Card className="overflow-hidden border-0 bg-brand p-4 text-brand-ink sm:p-5">
          {config.form.title && <h2 className="mb-4 text-base font-bold">{config.form.title}</h2>}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {config.form.fields.map((f) => (
              <Field key={f.name} field={f} value={form[f.name]} onChange={onField} />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={save} className="inline-flex items-center gap-2 rounded-lg bg-positive px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
              <Icon name="CheckCircle2" className="h-4 w-4" /> {config.form.submitLabel || 'Save'}
            </button>
            {toast && (
              <span role="status" className="inline-flex items-center gap-1.5 text-sm font-semibold text-positive">
                <Icon name="CheckCircle2" className="h-4 w-4" /> Saved successfully
              </span>
            )}
          </div>
        </Card>
      )}

      {/* Filters */}
      {config.filters && (
        <Card className="card-pad">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {config.filters.map((f) => (
              <Field key={f.name} field={f} value={form[`f_${f.name}`]} onChange={(n, v) => onField(`f_${f.name}`, v)} onDark={false} />
            ))}
          </div>
          <button className="btn-primary mt-3 bg-warn text-white hover:opacity-90">
            <Icon name="Search" className="h-4 w-4" /> Search
          </button>
        </Card>
      )}

      {/* Table */}
      {config.table && (
        <Card className="card-pad">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[13px] text-muted">
              Show
              <select className="rounded-lg border border-border bg-surface px-2 py-1 text-sm">
                <option>All</option><option>10</option><option>25</option>
              </select>
              entries
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {(config.table.exports || ['CSV', 'PDF']).map((e) => (
                <button key={e} className="rounded-lg border border-border px-3 py-1.5 text-[12px] font-semibold text-muted hover:bg-surface-2 hover:text-ink">
                  {e}
                </button>
              ))}
              <SearchInput value={q} onChange={setQ} placeholder="Filter…" className="w-full sm:w-48" />
            </div>
          </div>
          <DataTable
            columns={columns}
            rows={filtered}
            initialSort={config.table.initialSort}
            minWidth={config.table.minWidth || 640}
            rowKey="id"
          />
          <div className="mt-3 text-[12px] text-muted">
            Showing {filtered.length} of {rows.length} entries
          </div>
        </Card>
      )}

      {config.note && (
        <p className="text-center text-[12px] text-muted">{config.note}</p>
      )}
    </div>
  )
}
