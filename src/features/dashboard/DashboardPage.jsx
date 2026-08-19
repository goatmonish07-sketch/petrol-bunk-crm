import { KpiRow } from './KpiRow'
import { SalesTrendCard, ShiftComparisonCard } from './SalesAnalytics'
import { AlertsFeed } from './AlertsFeed'
import { FuelStockPanel } from './FuelStockPanel'
import { BankPanel, CashReconciliation } from './CashAndBank'
import { CreditCustomers } from './CreditCustomers'

export function DashboardPage() {
  return (
    <div className="space-y-3">
      {/* KPI hero */}
      <KpiRow />

      {/* Sales trend + shift + alerts */}
      <div className="grid gap-3 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <SalesTrendCard />
        </div>
        <AlertsFeed />
      </div>

      {/* Shift comparison + bank panel */}
      <div className="grid gap-3 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <ShiftComparisonCard />
        </div>
        <BankPanel />
      </div>

      {/* Fuel stock trio */}
      <FuelStockPanel />

      {/* Credit customers + cash reconciliation */}
      <div className="grid gap-3 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <CreditCustomers />
        </div>
        <CashReconciliation />
      </div>
    </div>
  )
}
