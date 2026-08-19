import { Card, CardHeader } from '../../components/ui/Card'
import { Gauge } from '../../components/ui/Gauge'
import { Icon } from '../../components/ui/Icon'
import { tanks, stockReconciliation, lowStockAlerts } from '../../mock/dashboard'
import { formatInt } from '../../lib/format'

function TankCard({ tank }) {
  const pct = (tank.current / tank.capacity) * 100
  return (
    <div className="flex-1 rounded-xl border border-border bg-surface-2/50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md" style={{ color: `rgb(var(${'--' + tank.token}))` }}>
          <Icon name="Fuel" className="h-4 w-4" />
        </span>
        <span className="section-title">{tank.name}</span>
      </div>
      <div className="flex items-center justify-center">
        <Gauge pct={pct} token={`--${tank.token}`} reorderPct={tank.reorderPct} size={104} />
      </div>
      <div className="mt-2 text-center text-[12px] text-muted tnum">
        {formatInt(tank.current)} / {formatInt(tank.capacity)} Ltr
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 text-center">
        <div>
          <div className="text-[10px] uppercase tracking-wide text-muted">ETA Remaining</div>
          <div className="text-sm font-bold tnum">{tank.etaDays} Days</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wide text-muted">Reorder Level</div>
          <div className="text-sm font-bold tnum">{tank.reorderPct}%</div>
        </div>
      </div>
    </div>
  )
}

function ReconRow({ row }) {
  const empty = row.value == null
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-muted">
        {row.sign && <span className="mr-1 text-muted">{row.sign}</span>}
        {row.label}
      </span>
      <span className="font-semibold tnum">
        {empty ? '—' : `${formatInt(row.value)} Ltr`}
      </span>
    </div>
  )
}

export function FuelStockPanel() {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      <Card className="card-pad lg:col-span-1">
        <CardHeader title="Fuel Stock & Tank Monitoring" />
        <div className="mt-3 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          {tanks.map((t) => <TankCard key={t.id} tank={t} />)}
        </div>
      </Card>

      <Card className="card-pad">
        <CardHeader title={`Stock Reconciliation (${stockReconciliation.product})`} />
        <div className="mt-3 divide-y divide-border">
          {stockReconciliation.rows.map((r) => <ReconRow key={r.label} row={r} />)}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2.5">
          <span className="text-sm font-semibold">Closing Stock</span>
          <span className="text-base font-extrabold tnum">
            {formatInt(stockReconciliation.closing)} Ltr
          </span>
        </div>
      </Card>

      <Card className="card-pad">
        <CardHeader title="Low Stock Alerts" />
        <ul className="mt-2 divide-y divide-border">
          {lowStockAlerts.map((a) => (
            <li key={a.name} className="flex items-center gap-3 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-warn/12 text-warn">
                <Icon name="Fuel" className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{a.name}</div>
                <div className="text-[12px] text-muted">{a.note}</div>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-1 flex items-center gap-1 text-[12px] font-semibold text-brand">
          View All Alerts <Icon name="ChevronRight" className="h-3.5 w-3.5" />
        </button>
      </Card>
    </div>
  )
}
