import { useMemo, useState } from 'react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Card } from '../../components/ui/Card'
import { SegmentedFilter, SearchInput } from '../../components/ui/Filters'
import { Icon } from '../../components/ui/Icon'
import { RecordScreen } from '../records/RecordScreen'
import { REPORT_LIST, REPORT_GROUPS, REPORTS } from '../../mock/reports'

export function ReportsPage() {
  const [group, setGroup] = useState('All')
  const [q, setQ] = useState('')
  const [openId, setOpenId] = useState(null)

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase()
    return REPORT_LIST.filter(
      (r) => (group === 'All' || r.group === group) && (!query || r.name.toLowerCase().includes(query)),
    )
  }, [group, q])

  // Drill-in report view
  if (openId && REPORTS[openId]) {
    return (
      <div className="space-y-3">
        <button onClick={() => setOpenId(null)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          <Icon name="ChevronRight" className="h-4 w-4 rotate-180" /> Back to Reports
        </button>
        <RecordScreen config={REPORTS[openId]} />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Reports" blurb="Generate and export every operational and statutory report." />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <SegmentedFilter options={REPORT_GROUPS} value={group} onChange={setGroup} />
        <SearchInput value={q} onChange={setQ} placeholder="Search reports…" className="w-full sm:w-64" />
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">
        {rows.map((r) => (
          <button
            key={r.id}
            onClick={() => REPORTS[r.id] && setOpenId(r.id)}
            className="card flex items-center gap-3 p-3.5 text-left transition-colors hover:bg-surface-2"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-ink">
              <Icon name={r.icon} className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <div className="truncate text-[13px] font-semibold leading-tight">{r.name}</div>
              <div className="text-[11px] text-muted">{r.group}</div>
            </div>
          </button>
        ))}
      </div>
      {rows.length === 0 && <div className="py-16 text-center text-sm text-muted">No reports match your search.</div>}
    </div>
  )
}
