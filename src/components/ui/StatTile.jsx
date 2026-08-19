import { Card } from './Card'
import { Icon } from './Icon'
import { Delta } from './Delta'
import { Sparkline } from './Sparkline'
import { formatINR, formatNumber } from '../../lib/format'

function renderValue(kpi) {
  if (kpi.kind === 'ltr') return `${formatNumber(kpi.value, 2)} ${kpi.unit}`
  return formatINR(kpi.value)
}

export function StatTile({ kpi, index = 0 }) {
  return (
    <Card
      className="card-pad animate-fade-up"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-surface-2 text-ink">
            <Icon name={kpi.icon} className="h-4.5 w-4.5" />
          </div>
        </div>
        <div className="w-24 sm:w-28">
          <Sparkline data={kpi.spark} height={34} />
        </div>
      </div>

      <div className="mt-2.5 text-[12px] font-medium text-muted">{kpi.label}</div>
      <div className="mt-0.5 text-[19px] font-extrabold leading-tight tracking-tight tnum sm:text-[21px]">
        {renderValue(kpi)}
      </div>
      <div className="mt-1.5">
        <Delta value={kpi.delta} />
      </div>
    </Card>
  )
}
