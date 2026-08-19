import { useEffect, useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { Topbar } from './components/layout/Topbar'
import { BottomNav } from './components/layout/BottomNav'
import { DashboardPage } from './features/dashboard/DashboardPage'
import { ModulePage } from './features/modules/ModulePage'
import { useTheme } from './lib/useTheme'
import { NAV } from './lib/nav'

export default function App() {
  const { theme, toggle } = useTheme()
  const [active, setActive] = useState('dashboard')
  const [drawer, setDrawer] = useState(false)

  // Close drawer with Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setDrawer(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navigate = (id) => {
    setActive(id)
    window.scrollTo({ top: 0 })
  }

  const label = NAV.find((n) => n.id === active)?.label || 'Dashboard'

  return (
    <div className="min-h-dvh bg-bg">
      <div className="flex">
        {/* Desktop sidebar */}
        <div className="sticky top-0 hidden h-dvh shrink-0 lg:block">
          <Sidebar active={active} onNavigate={navigate} />
        </div>

        {/* Mobile drawer */}
        {drawer && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setDrawer(false)}
              aria-hidden
            />
            <div className="absolute left-0 top-0 h-full animate-fade-up">
              <Sidebar active={active} onNavigate={navigate} onClose={() => setDrawer(false)} />
            </div>
          </div>
        )}

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar onOpenMenu={() => setDrawer(true)} theme={theme} onToggleTheme={toggle} />

          <main className="mx-auto w-full max-w-[1600px] flex-1 px-3 pb-24 pt-4 sm:px-5 lg:pb-8">
            <div className="mb-4 lg:hidden">
              <h1 className="text-lg font-extrabold tracking-tight">{label}</h1>
            </div>
            {active === 'dashboard' ? <DashboardPage /> : <ModulePage id={active} />}
          </main>
        </div>
      </div>

      <BottomNav active={active} onNavigate={navigate} onMore={() => setDrawer(true)} />
    </div>
  )
}
