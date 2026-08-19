import { useMemo, useState } from 'react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Card } from '../../components/ui/Card'
import { SegmentedFilter, SearchInput } from '../../components/ui/Filters'
import { Icon } from '../../components/ui/Icon'
import { reportsList, reportGroups } from '../../mock/modules'

export function ReportsPage() {
  const [group, setGroup] = useState('All')
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase()
    return reportsList.filter(
      (r) => (group === 'All' || r.group === group) && (!query || r.name.toLowerCase().includes(query)),
    )
  }, [group, q])

  return (
    <div className="space-y-4">
      <PageHeader
        title="Reports & Statements"
        blurb="Generate and export printable statements across every module."
      />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <SegmentedFilter options={reportGroups} value={group} onChange={setGroup} />
        <SearchInput value={q} onChange={setQ} placeholder="Search reports…" className="w-full sm:w-64" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map((r) => (
          <Card key={r.id} className="card-pad flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-ink">
              <Icon name={r.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-sm font-bold">{r.name}</h3>
                <span className="chip bg-surface-2 text-muted">{r.group}</span>
              </div>
              <p className="mt-0.5 text-[12px] text-muted">{r.desc}</p>
              <div className="mt-3 flex items-center gap-2">
                <button className="btn-primary px-3 py-1.5 text-[12px]">
                  <Icon name="FileText" className="h-3.5 w-3.5" /> Generate
                </button>
                <button className="btn-ghost px-3 py-1.5 text-[12px]">
                  <Icon name="Download" className="h-3.5 w-3.5" /> PDF
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {rows.length === 0 && (
        <div className="py-16 text-center text-sm text-muted">No reports match your search.</div>
      )}
    </div>
  )
}
