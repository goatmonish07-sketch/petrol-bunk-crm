import { PageHeader } from '../../components/ui/PageHeader'
import { MiniStat } from '../../components/ui/Filters'
import { Icon } from '../../components/ui/Icon'
import { CreditCustomers } from '../dashboard/CreditCustomers'
import { customers, creditSummary } from '../../mock/dashboard'
import { formatINR } from '../../lib/format'

export function CreditPage() {
  const overLimit = customers.filter((c) => c.due > c.limit).length
  const nearLimit = customers.filter((c) => c.due <= c.limit && c.due / c.limit > 0.85).length

  return (
    <div className="space-y-4">
      <PageHeader
        title="Credit Customer Intelligence"
        blurb="Outstanding, credit limits and ageing across all credit accounts."
        actions={
          <>
            <button className="btn-ghost"><Icon name="Download" className="h-4 w-4" /> Statement</button>
            <button className="btn-primary"><Icon name="Plus" className="h-4 w-4" /> Add Customer</button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MiniStat label="Total Outstanding" value={formatINR(creditSummary.totalOutstanding, { whole: true })} />
        <MiniStat label="Overdue Accounts" value={creditSummary.overdueAccounts} tone="negative" />
        <MiniStat label="Over Credit Limit" value={overLimit} tone={overLimit ? 'negative' : 'positive'} />
        <MiniStat label="Near Limit (>85%)" value={nearLimit} tone={nearLimit ? 'negative' : 'positive'} />
      </div>

      <CreditCustomers />
    </div>
  )
}
