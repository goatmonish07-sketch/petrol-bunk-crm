import { useMemo, useState } from 'react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Card, CardHeader } from '../../components/ui/Card'
import { DataTable } from '../../components/ui/DataTable'
import { SegmentedFilter, SearchInput, MiniStat } from '../../components/ui/Filters'
import { Badge } from '../../components/ui/Badge'
import { Icon } from '../../components/ui/Icon'
import { SalesTrendCard, ShiftComparisonCard } from '../dashboard/SalesAnalytics'
import { salesTxns } from '../../mock/modules'
import { formatINR, formatNumber } from '../../lib/format'

const PRODUCTS = ['All', 'Petrol', 'Diesel', 'Lubricants']
const MODE_TONE = { Cash: 'neutral', UPI: 'positive', Card: 'neutral', Credit: 'warn' }

export function SalesPage() {
  const [product, setProduct] = useState('All')
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase()
    return salesTxns.filter(
      (t) =>
        (product === 'All' || t.product === product) &&
        (!query || t.id.toLowerCase().includes(query) || t.customer.toLowerCase().includes(query)),
    )
  }, [product, q])

  const total = rows.reduce((s, r) => s + r.amount, 0)
  const volume = rows.filter((r) => r.product !== 'Lubricants').reduce((s, r) => s + r.qty, 0)
  const creditCount = rows.filter((r) => r.mode === 'Credit').length

  const columns = [
    { key: 'id', label: 'Invoice', sortable: true, render: (r) => <span className="font-semibold">{r.id}</span> },
    { key: 'time', label: 'Time' },
    { key: 'product', label: 'Product', render: (r) => <span>{r.product}</span> },
    { key: 'nozzle', label: 'Nozzle' },
    { key: 'qty', label: 'Qty', align: 'right', sortable: true, render: (r) => formatNumber(r.qty, 2) },
    { key: 'rate', label: 'Rate', align: 'right', render: (r) => formatINR(r.rate, { whole: false }) },
    { key: 'amount', label: 'Amount', align: 'right', sortable: true, render: (r) => <span className="font-semibold">{formatINR(r.amount)}</span> },
    { key: 'mode', label: 'Mode', render: (r) => <Badge tone={MODE_TONE[r.mode]}>{r.mode}</Badge> },
    { key: 'customer', label: 'Customer' },
  ]

  return (
    <div className="space-y-4">
      <PageHeader
        title="Sales & Invoicing"
        blurb="Every fuel and lubricant sale for the selected day, by shift, nozzle and product."
        actions={
          <>
            <button className="btn-ghost"><Icon name="Download" className="h-4 w-4" /> Export</button>
            <button className="btn-primary"><Icon name="Plus" className="h-4 w-4" /> New Sale</button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MiniStat label="Total Sale" value={formatINR(total, { whole: true })} />
        <MiniStat label="Fuel Volume" value={`${formatNumber(volume, 2)} L`} />
        <MiniStat label="Transactions" value={rows.length} />
        <MiniStat label="Credit Bills" value={creditCount} tone={creditCount ? 'negative' : undefined} />
      </div>

      <div className="grid gap-3 xl:grid-cols-3">
        <div className="xl:col-span-2"><SalesTrendCard /></div>
        <ShiftComparisonCard />
      </div>

      <Card className="card-pad">
        <CardHeader
          title="Sale Transactions"
          action={
            <div className="flex flex-wrap items-center gap-2">
              <SegmentedFilter options={PRODUCTS} value={product} onChange={setProduct} />
              <SearchInput value={q} onChange={setQ} placeholder="Invoice / customer…" className="w-full sm:w-52" />
            </div>
          }
        />
        <div className="mt-3">
          <DataTable columns={columns} rows={rows} initialSort={{ key: 'amount', dir: 'desc' }} minWidth={840} />
        </div>
      </Card>
    </div>
  )
}
