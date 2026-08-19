import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts'
import { cssVar } from '../../lib/constants'

// Minimal trend line for KPI tiles. `data` is [{ i, v }].
export function Sparkline({ data, tone = '--data', height = 40 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 4, right: 2, bottom: 2, left: 2 }}>
        <YAxis hide domain={['dataMin', 'dataMax']} />
        <Line
          type="monotone"
          dataKey="v"
          stroke={cssVar(tone)}
          strokeWidth={1.75}
          dot={{ r: 1.6, fill: cssVar(tone), strokeWidth: 0 }}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
