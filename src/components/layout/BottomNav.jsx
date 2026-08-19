import { MOBILE_NAV } from '../../lib/nav'
import { Icon } from '../ui/Icon'

const items = MOBILE_NAV.concat({ id: 'more', label: 'More', icon: 'MoreHorizontal' })

export function BottomNav({ active, onNavigate, onMore }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around">
        {items.map((item) => {
          const isActive = item.id === active
          return (
            <button
              key={item.id}
              onClick={() => (item.id === 'more' ? onMore() : onNavigate(item.id))}
              className={`relative flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                isActive ? 'text-brand' : 'text-muted'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon name={item.icon} className="h-[22px] w-[22px]" strokeWidth={isActive ? 2.4 : 2} />
              {item.label}
              {item.badge && <span className="absolute right-5 top-1 h-2 w-2 rounded-full bg-petrol" />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
