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
      className="animate-fade-up p-3 sm:p-5"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-surface-2 text-ink sm:h-8 sm:w-8">
          <Icon name={kpi.icon} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
        </div>
        <div className="w-16 sm:w-28">
          <Sparkline data={kpi.spark} height={30} />
        </div>
      </div>

      <div className="mt-2 truncate text-[11px] font-medium text-muted sm:text-[12px]">{kpi.label}</div>
      <div className="mt-0.5 text-[17px] font-extrabold leading-tight tracking-tight tnum sm:text-[21px]">
        {renderValue(kpi)}
      </div>
      <div className="mt-1">
        <Delta value={kpi.delta} />
      </div>
    </Card>
  )
}
