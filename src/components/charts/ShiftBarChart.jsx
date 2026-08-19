import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import { cssVar } from '../../lib/constants'
import { formatINR, formatInt } from '../../lib/format'

function TipContent({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2 shadow-pop">
      <div className="text-[11px] font-semibold">{d.shift} Shift</div>
      <div className="text-sm font-bold tnum">{formatINR(d.sale)}</div>
      <div className="text-[11px] text-muted tnum">{formatInt(d.volume)} Ltr</div>
    </div>
  )
}

// Grouped view: two bars (sale + volume) rendered as paired columns per shift.
export function ShiftBarChart({ data, height = 200 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 24, right: 8, bottom: 0, left: 8 }} barGap={6}>
        {/* Two independent scales so ₹ and litres both render at readable heights */}
        <YAxis yAxisId="sale" hide domain={[0, (max) => max * 1.15]} />
        <YAxis yAxisId="vol" hide domain={[0, (max) => max * 1.6]} />
        <XAxis dataKey="shift" tickLine={false} axisLine={false} dy={6} />
        <Tooltip content={<TipContent />} cursor={{ fill: cssVar('--surface-2') }} />
        <Bar yAxisId="sale" dataKey="sale" radius={[6, 6, 0, 0]} maxBarSize={40}
          label={{ position: 'top', fontSize: 11, fill: cssVar('--muted'),
            formatter: (v) => `₹${(v / 1e5).toFixed(2)} L` }}>
          {data.map((d, i) => <Cell key={i} fill={cssVar('--data')} />)}
        </Bar>
        <Bar yAxisId="vol" dataKey="volume" radius={[6, 6, 0, 0]} maxBarSize={40}
          label={{ position: 'top', fontSize: 11, fill: cssVar('--muted'),
            formatter: (v) => `${formatInt(v)} L` }}>
          {data.map((d, i) => <Cell key={i} fill={cssVar('--data-2')} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
