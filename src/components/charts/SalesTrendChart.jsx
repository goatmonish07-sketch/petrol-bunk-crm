import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { cssVar } from '../../lib/constants'
import { formatINR } from '../../lib/format'

const yTick = (v) => (v >= 1e5 ? `₹${Math.round(v / 1e5)}L` : `₹${Math.round(v / 1e3)}K`)

function TipContent({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2 shadow-pop">
      <div className="text-[11px] text-muted">{label}</div>
      <div className="text-sm font-bold tnum">{formatINR(payload[0].value)}</div>
    </div>
  )
}

export function SalesTrendChart({ data, height = 240 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 4 }}>
        <defs>
          <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={cssVar('--data')} stopOpacity={0.18} />
            <stop offset="100%" stopColor={cssVar('--data')} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={cssVar('--border')} strokeDasharray="3 3" />
        <XAxis dataKey="label" tickLine={false} axisLine={false} dy={6} minTickGap={12} />
        <YAxis tickFormatter={yTick} tickLine={false} axisLine={false} width={42} />
        <Tooltip content={<TipContent />} cursor={{ stroke: cssVar('--muted'), strokeDasharray: '3 3' }} />
        <Area
          type="monotone" dataKey="value"
          stroke={cssVar('--data')} strokeWidth={2.4}
          fill="url(#salesFill)"
          dot={{ r: 2.5, fill: cssVar('--surface'), stroke: cssVar('--data'), strokeWidth: 2 }}
          activeDot={{ r: 4.5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
