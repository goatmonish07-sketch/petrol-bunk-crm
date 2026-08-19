import { PageHeader } from '../../components/ui/PageHeader'
import { Card, CardHeader } from '../../components/ui/Card'
import { DataTable } from '../../components/ui/DataTable'
import { MiniStat } from '../../components/ui/Filters'
import { Badge } from '../../components/ui/Badge'
import { Icon } from '../../components/ui/Icon'
import { FuelStockPanel } from '../dashboard/FuelStockPanel'
import { stockItems, purchases } from '../../mock/modules'
import { formatINR, formatNumber, formatInt } from '../../lib/format'

const PO_TONE = { Received: 'positive', 'In Transit': 'warn', Ordered: 'neutral' }

export function StockPage() {
  const belowReorder = stockItems.filter((s) => s.closing <= s.reorder).length

  const stockCols = [
    { key: 'product', label: 'Product', sortable: true, render: (r) => <span className="font-semibold">{r.product}</span> },
    { key: 'opening', label: 'Opening', align: 'right', render: (r) => formatNumber(r.opening, r.unit === 'Nos' ? 0 : 2) },
    { key: 'purchase', label: 'Purchase', align: 'right', render: (r) => (r.purchase ? `+${formatInt(r.purchase)}` : '—') },
    { key: 'sales', label: 'Sales', align: 'right', render: (r) => `−${formatNumber(r.sales, r.unit === 'Nos' ? 0 : 2)}` },
    { key: 'closing', label: 'Closing', align: 'right', sortable: true, render: (r) => <span className="font-semibold">{formatNumber(r.closing, r.unit === 'Nos' ? 0 : 2)} {r.unit}</span> },
    {
      key: 'status', label: 'Status',
      render: (r) =>
        r.closing <= r.reorder
          ? <Badge tone="negative"><Icon name="AlertTriangle" className="h-3 w-3" /> Reorder</Badge>
          : <Badge tone="positive">In Stock</Badge>,
    },
  ]

  const poCols = [
    { key: 'id', label: 'PO No.', sortable: true, render: (r) => <span className="font-semibold">{r.id}</span> },
    { key: 'date', label: 'Date' },
    { key: 'vendor', label: 'Vendor' },
    { key: 'product', label: 'Product' },
    { key: 'qty', label: 'Qty', align: 'right', render: (r) => formatInt(r.qty) },
    { key: 'amount', label: 'Amount', align: 'right', sortable: true, render: (r) => <span className="font-semibold">{formatINR(r.amount, { whole: true })}</span> },
    { key: 'status', label: 'Status', render: (r) => <Badge tone={PO_TONE[r.status]}>{r.status}</Badge> },
  ]

  return (
    <div className="space-y-4">
      <PageHeader
        title="Fuel Stock & Inventory"
        blurb="Live tank levels, product stock reconciliation and purchase orders."
        actions={
          <>
            <button className="btn-ghost"><Icon name="Truck" className="h-4 w-4" /> New Purchase</button>
            <button className="btn-primary"><Icon name="Plus" className="h-4 w-4" /> Stock Entry</button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MiniStat label="Products Tracked" value={stockItems.length} />
        <MiniStat label="Below Reorder" value={belowReorder} tone={belowReorder ? 'negative' : 'positive'} />
        <MiniStat label="Open Purchase Orders" value={purchases.filter((p) => p.status !== 'Received').length} />
        <MiniStat label="Purchase Value (MTD)" value={formatINR(purchases.reduce((s, p) => s + p.amount, 0), { whole: true })} />
      </div>

      <FuelStockPanel />

      <Card className="card-pad">
        <CardHeader title="Product Stock Register" />
        <div className="mt-3">
          <DataTable columns={stockCols} rows={stockItems} initialSort={{ key: 'closing', dir: 'asc' }} minWidth={720} />
        </div>
      </Card>

      <Card className="card-pad">
        <CardHeader title="Purchase Orders" />
        <div className="mt-3">
          <DataTable columns={poCols} rows={purchases} initialSort={{ key: 'id', dir: 'desc' }} minWidth={720} />
        </div>
      </Card>
    </div>
  )
}
