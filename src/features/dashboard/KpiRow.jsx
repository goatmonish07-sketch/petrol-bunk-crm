import { StatTile } from '../../components/ui/StatTile'
import { kpis } from '../../mock/dashboard'

export function KpiRow() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 xl:grid-cols-6">
      {kpis.map((kpi, i) => (
        <StatTile key={kpi.id} kpi={kpi} index={i} />
      ))}
    </div>
  )
}
