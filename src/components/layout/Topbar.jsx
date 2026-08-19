import { useState } from 'react'
import { Icon } from '../ui/Icon'
import { SHIFTS } from '../../lib/constants'
import { business } from '../../mock/dashboard'

export function Topbar({ onOpenMenu, theme, onToggleTheme }) {
  const [shift, setShift] = useState('day')

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur">
      <div className="flex items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-5 sm:py-3">
        {/* Mobile menu + brand */}
        <button
          onClick={onOpenMenu}
          className="grid h-9 w-9 place-items-center rounded-lg hover:bg-surface-2 lg:hidden"
          aria-label="Open menu"
        >
          <Icon name="Menu" className="h-5 w-5" />
        </button>

        {/* Date */}
        <div className="hidden items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm font-medium sm:flex">
          <span className="tnum">{business.date}</span>
          <Icon name="Clock" className="h-4 w-4 text-muted" />
        </div>

        {/* Shift */}
        <div className="relative hidden sm:block">
          <select
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className="appearance-none rounded-xl border border-border bg-surface py-2 pl-3 pr-9 text-sm font-medium text-ink"
            aria-label="Select shift"
          >
            {SHIFTS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
          <Icon name="ChevronRight" className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted" />
        </div>

        <button className="btn-primary hidden px-4 sm:inline-flex">Today</button>

        {/* Search — grows */}
        <div className="relative ml-auto hidden max-w-sm flex-1 md:block">
          <Icon name="Search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            placeholder="Search anything…"
            className="w-full rounded-xl border border-border bg-surface py-2 pl-9 pr-3 text-sm placeholder:text-muted focus:outline-none"
          />
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-1.5 md:ml-0">
          <button className="relative grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface hover:bg-surface-2" aria-label="Notifications">
            <Icon name="Bell" className="h-4.5 w-4.5" />
            <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-petrol px-1 text-[10px] font-bold text-white">3</span>
          </button>
          <button className="hidden h-9 w-9 place-items-center rounded-lg border border-border bg-surface hover:bg-surface-2 sm:grid" aria-label="Print">
            <Icon name="Printer" className="h-4.5 w-4.5" />
          </button>
          <button
            onClick={onToggleTheme}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface hover:bg-surface-2"
            aria-label="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} className="h-4.5 w-4.5" />
          </button>
          <button className="btn-primary hidden px-4 lg:inline-flex">
            <Icon name="Download" className="h-4 w-4" /> Export
          </button>
        </div>
      </div>
    </header>
  )
}
