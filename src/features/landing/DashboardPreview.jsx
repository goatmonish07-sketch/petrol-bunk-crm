import { SalesTrendChart } from '../../components/charts/SalesTrendChart'
import { Sparkline } from '../../components/ui/Sparkline'
import { Icon } from '../../components/ui/Icon'
import { salesTrend } from '../../mock/dashboard'

const MINI = [
  { label: "Today's Sale", value: '₹21.3L', delta: '+12.4%', icon: 'IndianRupee', spark: [16, 17, 16.4, 18, 17.6, 19.9, 21.3] },
  { label: 'Fuel Volume', value: '5,840 L', delta: '+4.8%', icon: 'Fuel', spark: [5.1, 5.3, 5.2, 5.5, 5.4, 5.7, 5.84] },
  { label: 'Cash In Hand', value: '₹4.62L', delta: '+3.6%', icon: 'Wallet', spark: [4.2, 4.35, 4.28, 4.4, 4.5, 4.55, 4.62] },
]

// Compact, non-interactive snapshot of the dashboard for the hero.
export function DashboardPreview() {
  return (
    <div className="pointer-events-none select-none overflow-hidden rounded-xl border border-border bg-surface shadow-pop">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-negative/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-positive/70" />
        <span className="ml-3 hidden text-[10px] text-muted sm:inline">velmuruganagencies.crm / dashboard</span>
      </div>

      <div className="space-y-3 p-3">
        {/* mini KPI row */}
        <div className="grid grid-cols-3 gap-2">
          {MINI.map((k) => (
            <div key={k.label} className="rounded-lg border border-border bg-surface p-2.5">
              <div className="flex items-center justify-between">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-surface-2 text-ink">
                  <Icon name={k.icon} className="h-3.5 w-3.5" />
                </span>
                <div className="h-5 w-10"><Sparkline data={k.spark.map((v, i) => ({ i, v }))} height={20} /></div>
              </div>
              <div className="mt-1.5 truncate text-[10px] text-muted">{k.label}</div>
              <div className="text-sm font-extrabold tnum">{k.value}</div>
              <div className="text-[10px] font-semibold text-positive">{k.delta}</div>
            </div>
          ))}
        </div>

        {/* sales trend */}
        <div className="rounded-lg border border-border bg-surface p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Sales Trend (7D)</span>
            <span className="rounded bg-brand px-1.5 py-0.5 text-[9px] font-bold text-brand-ink">7D</span>
          </div>
          <SalesTrendChart data={salesTrend['7d']} height={130} />
        </div>
      </div>
    </div>
  )
}
