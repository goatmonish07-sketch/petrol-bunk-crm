import { useState } from 'react'
import { Card, CardHeader } from '../../components/ui/Card'
import { SalesTrendChart } from '../../components/charts/SalesTrendChart'
import { ProductMixDonut } from '../../components/charts/ProductMixDonut'
import { ShiftBarChart } from '../../components/charts/ShiftBarChart'
import { RANGES } from '../../lib/constants'
import { salesTrend, productMix, shiftComparison } from '../../mock/dashboard'
import { formatINR, formatInt } from '../../lib/format'

function RangeToggle({ value, onChange }) {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-surface-2 p-0.5">
      {RANGES.map((r) => (
        <button
          key={r.id}
          onClick={() => onChange(r.id)}
          className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors ${
            value === r.id ? 'bg-brand text-brand-ink' : 'text-muted hover:text-ink'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}

export function SalesTrendCard() {
  const [range, setRange] = useState('7d')
  return (
    <Card className="card-pad">
      <CardHeader
        title={`Sales Trend (${range.toUpperCase()})`}
        action={<RangeToggle value={range} onChange={setRange} />}
      />
      <div className="mt-4 grid gap-4 md:grid-cols-[1.6fr,1fr] md:items-center">
        <SalesTrendChart data={salesTrend[range]} />
        <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
          <div className="section-title mb-3">Product Mix</div>
          <ProductMixDonut data={productMix} />
        </div>
      </div>
    </Card>
  )
}

export function ShiftComparisonCard() {
  return (
    <Card className="card-pad">
      <CardHeader title="Shift Comparison" />
      <div className="mt-2 flex items-center gap-4 text-[11px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-data" /> Sale (₹)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-data-2" /> Volume (Ltr)
        </span>
      </div>
      <ShiftBarChart data={shiftComparison} />
      <div className="mt-1 grid grid-cols-2 gap-2 text-center">
        {shiftComparison.map((s) => (
          <div key={s.shift}>
            <div className="text-sm font-bold tnum">{formatINR(s.sale, { whole: true })}</div>
            <div className="text-[11px] text-muted tnum">{formatInt(s.volume)} L · {s.window}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
