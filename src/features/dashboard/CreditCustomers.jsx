import { useMemo, useState } from 'react'
import { Card, CardHeader } from '../../components/ui/Card'
import { Icon } from '../../components/ui/Icon'
import { StatusBadge } from '../../components/ui/Badge'
import { ExportButton } from '../../components/ui/ExportButton'
import { customers, creditSummary } from '../../mock/dashboard'
import { formatINR, formatCompactINR } from '../../lib/format'
import { cssVar } from '../../lib/constants'

function AgingBar({ aging }) {
  const tokenVar = { data: '--data', 'data-2': '--data-2', warn: '--warn', negative: '--negative' }
  return (
    <div>
      <div className="section-title mb-2">Aging Summary</div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full">
        {aging.map((a) => (
          <div
            key={a.bucket}
            style={{ width: `${a.pct}%`, background: cssVar(tokenVar[a.token]) }}
            title={`${a.bucket}: ${formatINR(a.value)}`}
          />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4">
        {aging.map((a) => (
          <div key={a.bucket} className="flex items-center gap-1.5 text-[11px]">
            <span className="h-2 w-2 rounded-sm" style={{ background: cssVar(tokenVar[a.token]) }} />
            <span className="text-muted">{a.bucket}</span>
            <span className="ml-auto font-semibold tnum">{a.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function usedPct(c) {
  return Math.round((c.due / c.limit) * 100)
}

export function CreditCustomers() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('due')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return customers
      .filter((c) => !q || c.name.toLowerCase().includes(q) || c.mobile.includes(q))
      .sort((a, b) => (sort === 'due' ? b.due - a.due : a.name.localeCompare(b.name)))
  }, [query, sort])

  return (
    <Card className="card-pad">
      <CardHeader
        title="Credit Customers"
        action={
          <div className="flex items-center gap-2">
            <ExportButton
              filename="Credit_Customers"
              columns={[
                { key: 'name', label: 'Customer' }, { key: 'mobile', label: 'Mobile' },
                { key: 'limit', label: 'Credit Limit' }, { key: 'due', label: 'Due Amount' },
                { key: 'lastPaid', label: 'Last Paid' }, { key: 'status', label: 'Status' },
              ]}
              rows={rows}
            />
            <div className="relative hidden sm:block">
              <Icon name="Search" className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search customer…"
                className="w-40 rounded-lg border border-border bg-surface-2 py-1.5 pl-8 pr-2 text-[13px] focus:outline-none"
              />
            </div>
          </div>
        }
      />

      {/* Summary strip */}
      <div className="mt-4 grid gap-4 sm:grid-cols-[auto,auto,1fr] sm:items-center">
        <div>
          <div className="text-[11px] text-muted">Total Outstanding</div>
          <div className="text-xl font-extrabold tnum">{formatINR(creditSummary.totalOutstanding)}</div>
        </div>
        <div className="sm:border-l sm:border-border sm:pl-4">
          <div className="text-[11px] text-muted">Overdue Accounts</div>
          <div className="text-xl font-extrabold tnum text-negative">{creditSummary.overdueAccounts}</div>
        </div>
        <div className="sm:border-l sm:border-border sm:pl-4">
          <AgingBar aging={creditSummary.aging} />
        </div>
      </div>

      {/* Table */}
      <div className="mt-4 -mx-1 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wide text-muted">
              <th className="px-2 py-2 font-semibold">
                <button onClick={() => setSort('name')} className="hover:text-ink">Customer</button>
              </th>
              <th className="px-2 py-2 font-semibold">Mobile</th>
              <th className="px-2 py-2 text-right font-semibold">Credit Limit</th>
              <th className="px-2 py-2 text-right font-semibold">Used %</th>
              <th className="px-2 py-2 text-right font-semibold">
                <button onClick={() => setSort('due')} className="hover:text-ink">Due Amount</button>
              </th>
              <th className="px-2 py-2 font-semibold">Last Paid</th>
              <th className="px-2 py-2 font-semibold">Status</th>
              <th className="px-2 py-2" />
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const up = usedPct(c)
              const over = up > 100
              return (
                <tr key={c.id} className="border-t border-border">
                  <td className="px-2 py-2.5 font-medium">{c.name}</td>
                  <td className="px-2 py-2.5">
                    <a href={`tel:${c.mobile}`} className="inline-flex items-center gap-1 text-muted hover:text-brand tnum">
                      {c.mobile} <Icon name="Phone" className="h-3.5 w-3.5" />
                    </a>
                  </td>
                  <td className="px-2 py-2.5 text-right tnum">{formatCompactINR(c.limit)}</td>
                  <td className="px-2 py-2.5 text-right">
                    <span className={`tnum font-semibold ${over ? 'text-negative' : up > 85 ? 'text-warn' : 'text-ink'}`}>
                      {up}%
                    </span>
                  </td>
                  <td className="px-2 py-2.5 text-right font-semibold tnum">{formatINR(c.due, { whole: true })}</td>
                  <td className="px-2 py-2.5 text-muted tnum">{c.lastPaid}</td>
                  <td className="px-2 py-2.5"><StatusBadge status={c.status} /></td>
                  <td className="px-2 py-2.5 text-right">
                    <button className="grid h-7 w-7 place-items-center rounded-md text-muted hover:bg-surface-2" aria-label="Actions">
                      <Icon name="MoreHorizontal" className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <button className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-brand">
        View All Customers <Icon name="ChevronRight" className="h-3.5 w-3.5" />
      </button>
    </Card>
  )
}
