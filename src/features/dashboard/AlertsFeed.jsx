import { Card, CardHeader } from '../../components/ui/Card'
import { Icon } from '../../components/ui/Icon'
import { alerts } from '../../mock/dashboard'

const TONE = {
  warn: 'bg-warn/12 text-warn',
  negative: 'bg-negative/12 text-negative',
  muted: 'bg-surface-2 text-muted',
}

export function AlertsFeed() {
  return (
    <Card className="card-pad">
      <CardHeader
        title="Alerts"
        action={<button className="text-[12px] font-semibold text-brand">View All</button>}
      />
      <ul className="mt-2 divide-y divide-border">
        {alerts.map((a) => (
          <li key={a.id}>
            <button className="flex w-full items-center gap-3 py-3 text-left transition-colors hover:bg-surface-2/60">
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${TONE[a.tone] || TONE.muted}`}>
                <Icon name={a.icon} className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{a.title}</div>
                <div className="text-[12px] text-muted">{a.note}</div>
              </div>
              <Icon name="ChevronRight" className="h-4 w-4 shrink-0 text-muted" />
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}
