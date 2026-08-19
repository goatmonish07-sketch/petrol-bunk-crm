import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts'
import { cssVar } from '../../lib/constants'
import { formatINR } from '../../lib/format'

const yTick = (v) => `₹${Math.round(v / 1e5)}L`

function TipContent({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2 shadow-pop">
      <div className="text-[11px] text-muted">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2 text-[12px]">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
          <span className="capitalize">{p.dataKey}</span>
          <span className="ml-auto font-semibold tnum">{formatINR(p.value, { whole: true })}</span>
        </div>
      ))}
    </div>
  )
}

export function BankTrendChart({ data, height = 170 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke={cssVar('--border')} strokeDasharray="3 3" />
        <XAxis dataKey="label" tickLine={false} axisLine={false} dy={6} />
        <YAxis tickFormatter={yTick} tickLine={false} axisLine={false} width={40} />
        <Tooltip content={<TipContent />} />
        <Legend
          verticalAlign="top" height={24} iconType="circle" iconSize={8}
          formatter={(v) => <span className="text-[11px] capitalize text-muted">{v === 'icici' ? 'ICICI Bank' : 'Indian Bank'}</span>}
        />
        <Line type="monotone" dataKey="icici" stroke={cssVar('--data')} strokeWidth={2.2} dot={false} />
        <Line type="monotone" dataKey="indian" stroke={cssVar('--diesel')} strokeWidth={2.2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
