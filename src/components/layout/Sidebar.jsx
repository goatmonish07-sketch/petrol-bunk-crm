import { useState } from 'react'
import { NAV } from '../../lib/nav'
import { Icon } from '../ui/Icon'
import { business } from '../../mock/dashboard'

function Badge({ value }) {
  return (
    <span className="grid h-5 min-w-5 place-items-center rounded-full bg-petrol px-1.5 text-[11px] font-bold text-white tnum">
      {value}
    </span>
  )
}

function Leaf({ item, active, onSelect, nested }) {
  const isActive = item.id === active
  return (
    <button
      onClick={() => onSelect(item.id)}
      className={`group flex w-full items-center gap-3 rounded-lg text-sm transition-colors ${
        nested ? 'py-2 pl-11 pr-3 text-[13px]' : 'px-3 py-2.5 font-medium'
      } ${
        isActive
          ? 'bg-brand-ink/12 text-brand-ink'
          : 'text-brand-ink/60 hover:bg-brand-ink/8 hover:text-brand-ink'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {!nested && <Icon name={item.icon} className="h-[18px] w-[18px]" />}
      <span className="flex-1 text-left">{item.label}</span>
      {item.badge && <Badge value={item.badge} />}
    </button>
  )
}

function Group({ item, active, onSelect, openGroup, setOpenGroup }) {
  const open = openGroup === item.group
  const hasActiveChild = item.children.some((c) => c.id === active)
  return (
    <div>
      <button
        onClick={() => setOpenGroup(open ? null : item.group)}
        className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
          hasActiveChild ? 'text-brand-ink' : 'text-brand-ink/60 hover:bg-brand-ink/8 hover:text-brand-ink'
        }`}
        aria-expanded={open}
      >
        <Icon name={item.icon} className="h-[18px] w-[18px]" />
        <span className="flex-1 text-left">{item.label}</span>
        {item.badge && <Badge value={item.badge} />}
        <Icon name="ChevronDown" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-0.5 space-y-0.5 pb-1">
          {item.children.map((c) => (
            <Leaf key={c.id} item={c} active={active} onSelect={onSelect} nested />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar({ active, onNavigate, onClose }) {
  // Open the group that contains the active item by default.
  const initialGroup = NAV.find((n) => n.children?.some((c) => c.id === active))?.group || null
  const [openGroup, setOpenGroup] = useState(initialGroup)

  const select = (id) => {
    onNavigate(id)
    onClose?.()
  }

  return (
    <aside className="flex h-full w-64 flex-col bg-brand text-brand-ink">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 pb-5 pt-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-ink/10">
          <Icon name="Droplet" className="h-6 w-6" />
        </div>
        <div className="leading-tight">
          <div className="text-[15px] font-extrabold tracking-tight">VELMURUGAN</div>
          <div className="-mt-1 text-[15px] font-extrabold tracking-tight">AGENCIES</div>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-brand-ink/50">
            {business.tagline}
          </div>
        </div>
      </div>

      {/* Nav (scrolls) */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 no-scrollbar">
        {NAV.map((item) =>
          item.children ? (
            <Group
              key={item.group}
              item={item}
              active={active}
              onSelect={select}
              openGroup={openGroup}
              setOpenGroup={setOpenGroup}
            />
          ) : (
            <Leaf key={item.id} item={item} active={active} onSelect={select} />
          ),
        )}
      </nav>

      {/* Shift footer */}
      <div className="m-3 shrink-0 rounded-xl bg-brand-ink/8 p-3.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-brand-ink/50">Current Shift</div>
            <div className="text-sm font-semibold">Day Shift</div>
          </div>
          <span className="chip bg-positive/20 text-positive">
            <span className="h-1.5 w-1.5 rounded-full bg-current" /> Open
          </span>
        </div>
        <button className="mt-3 w-full rounded-lg border border-brand-ink/20 py-2 text-sm font-semibold text-brand-ink/90 transition-colors hover:bg-brand-ink/10">
          Close Shift
        </button>
      </div>
    </aside>
  )
}
