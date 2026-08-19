import { Card, CardHeader } from '../../components/ui/Card'
import { Icon } from '../../components/ui/Icon'
import { BankTrendChart } from '../../components/charts/BankTrendChart'
import { banks, bankTrend, cashReconciliation } from '../../mock/dashboard'
import { formatINR } from '../../lib/format'

export function BankPanel() {
  return (
    <Card className="card-pad">
      <CardHeader title="Bank Balances" />
      <div className="mt-3 space-y-2.5">
        {banks.map((b) => (
          <div key={b.id} className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/50 p-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface text-ink">
              <Icon name="Landmark" className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{b.name}</div>
              <div className="text-[11px] text-muted tnum">{b.account}</div>
            </div>
            <div className="ml-auto text-right text-base font-extrabold tnum">
              {formatINR(b.balance, { whole: true })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <div className="section-title mb-1">Bank Balance Trend (6 Months)</div>
        <BankTrendChart data={bankTrend} />
      </div>
    </Card>
  )
}

function ReconRow({ row }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-muted">
        {row.sign && <span className="mr-1">{row.sign}</span>}
        {row.label}
      </span>
      <span className="font-semibold tnum">{formatINR(row.value, { whole: true })}</span>
    </div>
  )
}

export function CashReconciliation() {
  const { rows, expectedClosing, actualClosing, variance } = cashReconciliation
  const excess = variance >= 0
  return (
    <Card className="card-pad">
      <CardHeader title="Cash Reconciliation (Today)" />
      <div className="mt-3 divide-y divide-border">
        {rows.map((r) => <ReconRow key={r.label} row={r} />)}
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-surface-2 p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Expected Closing</span>
          <span className="font-semibold tnum">{formatINR(expectedClosing)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Actual Closing</span>
          <span className="font-semibold tnum">{formatINR(actualClosing)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-2">
          <span className={`text-sm font-bold ${excess ? 'text-positive' : 'text-negative'}`}>
            {excess ? 'Excess' : 'Short'}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-base font-extrabold tnum ${excess ? 'text-positive' : 'text-negative'}`}>
            {formatINR(Math.abs(variance))}
            <Icon name="CheckCircle2" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Card>
  )
}
