import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { cssVar } from '../../lib/constants'
import { formatINR } from '../../lib/format'

const tokenVar = { data: '--data', 'data-2': '--data-2', lube: '--lube' }

export function ProductMixDonut({ data, size = 150 }) {
  return (
    <div className="flex items-center gap-4">
      <div style={{ width: size, height: size }} className="shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data} dataKey="value" nameKey="name"
              innerRadius="62%" outerRadius="100%" paddingAngle={2} stroke="none"
              startAngle={90} endAngle={-270}
            >
              {data.map((d) => (
                <Cell key={d.name} fill={cssVar(tokenVar[d.token] || '--data')} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="space-y-2.5 text-sm">
        {data.map((d) => (
          <li key={d.name} className="flex items-start gap-2">
            <span
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-sm"
              style={{ background: cssVar(tokenVar[d.token] || '--data') }}
            />
            <div className="leading-tight">
              <div className="font-medium">{d.name}</div>
              <div className="text-[12px] text-muted tnum">
                {formatINR(d.value, { whole: true })} ({d.pct}%)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
