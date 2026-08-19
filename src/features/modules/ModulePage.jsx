import { Card } from '../../components/ui/Card'
import { Icon } from '../../components/ui/Icon'
import { MODULE_FEATURES } from '../../lib/nav'
import { SalesTrendCard, ShiftComparisonCard } from '../dashboard/SalesAnalytics'
import { FuelStockPanel } from '../dashboard/FuelStockPanel'
import { CreditCustomers } from '../dashboard/CreditCustomers'
import { BankPanel, CashReconciliation } from '../dashboard/CashAndBank'
import { AlertsFeed } from '../dashboard/AlertsFeed'

// Live sub-views reused from the dashboard so each module feels real in the demo.
const LIVE = {
  sales: () => (
    <div className="grid gap-3 xl:grid-cols-3">
      <div className="xl:col-span-2"><SalesTrendCard /></div>
      <ShiftComparisonCard />
    </div>
  ),
  stock: () => <FuelStockPanel />,
  credit: () => <CreditCustomers />,
  banks: () => (
    <div className="grid gap-3 lg:grid-cols-2">
      <BankPanel />
      <CashReconciliation />
    </div>
  ),
  alerts: () => (
    <div className="max-w-md"><AlertsFeed /></div>
  ),
}

export function ModulePage({ id }) {
  const m = MODULE_FEATURES[id]
  if (!m) return null
  const Live = LIVE[id]

  return (
    <div className="space-y-4">
      {/* Module header */}
      <div>
        <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">{m.title}</h1>
        <p className="mt-1 max-w-xl text-sm text-muted">{m.blurb}</p>
      </div>

      {/* Feature checklist */}
      <Card className="card-pad">
        <div className="section-title mb-3">Included in this module</div>
        <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {m.items.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Icon name="CheckCircle2" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-positive" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Live preview reused from dashboard, when available */}
      {Live && (
        <div>
          <div className="section-title mb-2">Live preview</div>
          <Live />
        </div>
      )}
    </div>
  )
}
