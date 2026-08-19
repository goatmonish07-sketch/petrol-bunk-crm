import { NAV } from '../../lib/nav'
import { Icon } from '../ui/Icon'
import { business } from '../../mock/dashboard'

export function Sidebar({ active, onNavigate, onClose }) {
  return (
    <aside className="flex h-full w-64 flex-col bg-brand text-brand-ink">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 pb-6 pt-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-ink/10">
          <Icon name="Droplet" className="h-6 w-6" />
        </div>
        <div className="leading-tight">
          <div className="text-[15px] font-extrabold tracking-tight">
            VELMURUGAN
          </div>
          <div className="text-[15px] font-extrabold tracking-tight -mt-1">
            AGENCIES
          </div>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-brand-ink/50">
            {business.tagline}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => {
          const isActive = item.id === active
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id)
                onClose?.()
              }}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-ink/12 text-brand-ink'
                  : 'text-brand-ink/65 hover:bg-brand-ink/8 hover:text-brand-ink'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon name={item.icon} className="h-[18px] w-[18px]" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-petrol px-1.5 text-[11px] font-bold text-white tnum">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Shift status footer */}
      <div className="m-3 rounded-xl bg-brand-ink/8 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-brand-ink/50">
              Current Shift
            </div>
            <div className="text-sm font-semibold">Day Shift</div>
          </div>
          <span className="chip bg-positive/20 text-positive">
            <span className="h-1.5 w-1.5 rounded-full bg-current" /> Open
          </span>
        </div>
        <div className="mt-3 text-[11px] text-brand-ink/50">
          Shift started at
          <span className="ml-1 font-semibold text-brand-ink/80">
            {business.shiftStartedAt}
          </span>
        </div>
        <button className="mt-3 w-full rounded-lg border border-brand-ink/20 py-2 text-sm font-semibold text-brand-ink/90 transition-colors hover:bg-brand-ink/10">
          Close Shift
        </button>
      </div>
    </aside>
  )
}
