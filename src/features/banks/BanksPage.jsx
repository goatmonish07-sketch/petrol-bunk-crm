import { useMemo, useState } from 'react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Card, CardHeader } from '../../components/ui/Card'
import { DataTable } from '../../components/ui/DataTable'
import { SegmentedFilter, MiniStat } from '../../components/ui/Filters'
import { Icon } from '../../components/ui/Icon'
import { BankPanel, CashReconciliation } from '../dashboard/CashAndBank'
import { banks } from '../../mock/dashboard'
import { bankTxns as txns } from '../../mock/modules'
import { formatINR } from '../../lib/format'

const TYPES = ['All', 'Credit', 'Debit']

export function BanksPage() {
  const [type, setType] = useState('All')
  const rows = useMemo(() => txns.filter((t) => type === 'All' || t.type === type), [type])

  const totalBalance = banks.reduce((s, b) => s + b.balance, 0)
  const credits = txns.filter((t) => t.type === 'Credit').reduce((s, t) => s + t.amount, 0)
  const debits = txns.filter((t) => t.type === 'Debit').reduce((s, t) => s + t.amount, 0)

  const cols = [
    { key: 'date', label: 'Date', sortable: true },
    { key: 'particulars', label: 'Particulars', render: (r) => <span className="font-medium">{r.particulars}</span> },
    { key: 'bank', label: 'Bank' },
    {
      key: 'type', label: 'Type',
      render: (r) => (
        <span className={`inline-flex items-center gap-1 text-[12px] font-semibold ${r.type === 'Credit' ? 'text-positive' : 'text-negative'}`}>
          <Icon name={r.type === 'Credit' ? 'TrendingUp' : 'TrendingDown'} className="h-3.5 w-3.5" />
          {r.type}
        </span>
      ),
    },
    {
      key: 'amount', label: 'Amount', align: 'right', sortable: true,
      render: (r) => (
        <span className={`font-semibold ${r.type === 'Credit' ? 'text-positive' : 'text-negative'}`}>
          {r.type === 'Credit' ? '+' : '−'}{formatINR(r.amount, { whole: true })}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeader
        title="Banks & Cash"
        blurb="Bank balances, 6-month trend, daily cash reconciliation and business transactions."
        actions={
          <>
            <button className="btn-ghost"><Icon name="Download" className="h-4 w-4" /> Export</button>
            <button className="btn-primary"><Icon name="Plus" className="h-4 w-4" /> Add Transaction</button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MiniStat label="Total Bank Balance" value={formatINR(totalBalance, { whole: true })} />
        <MiniStat label="Inflows (Recent)" value={formatINR(credits, { whole: true })} tone="positive" />
        <MiniStat label="Outflows (Recent)" value={formatINR(debits, { whole: true })} tone="negative" />
        <MiniStat label="Accounts" value={banks.length} />
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <BankPanel />
        <CashReconciliation />
      </div>

      <Card className="card-pad">
        <CardHeader
          title="Bank Transactions"
          action={<SegmentedFilter options={TYPES} value={type} onChange={setType} />}
        />
        <div className="mt-3">
          <DataTable columns={cols} rows={rows} initialSort={{ key: 'date', dir: 'desc' }} minWidth={640} />
        </div>
      </Card>
    </div>
  )
}
