import { useEffect, useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { Topbar } from './components/layout/Topbar'
import { BottomNav } from './components/layout/BottomNav'
import { DashboardPage } from './features/dashboard/DashboardPage'
import { SalesPage } from './features/sales/SalesPage'
import { StockPage } from './features/stock/StockPage'
import { CreditPage } from './features/credit/CreditPage'
import { ReportsPage } from './features/reports/ReportsPage'
import { RecordScreen } from './features/records/RecordScreen'
import { Landing } from './features/landing/Landing'
import { useTheme } from './lib/useTheme'
import { findNav } from './lib/nav'
import { SCREENS } from './mock/screens'

// Rich, purpose-built pages
const RICH = {
  dashboard: DashboardPage,
  'db-sale': SalesPage,
  'ps-report': StockPage,
  'credit-limit': CreditPage,
  reports: ReportsPage,
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [entered, setEntered] = useState(false)
  const [active, setActive] = useState('dashboard')
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setDrawer(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navigate = (id) => {
    setActive(id)
    window.scrollTo({ top: 0 })
  }

  const RichPage = RICH[active]
  const config = SCREENS[active]

  if (!entered) {
    return <Landing onEnter={() => { setActive('dashboard'); setEntered(true) }} />
  }

  return (
    <div className="min-h-dvh bg-bg">
      <div className="flex">
        <div className="sticky top-0 hidden h-dvh shrink-0 lg:block">
          <Sidebar active={active} onNavigate={navigate} />
        </div>

        {drawer && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setDrawer(false)} aria-hidden />
            <div className="absolute left-0 top-0 h-full">
              <Sidebar active={active} onNavigate={navigate} onClose={() => setDrawer(false)} />
            </div>
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar onOpenMenu={() => setDrawer(true)} theme={theme} onToggleTheme={toggle} />

          <main className="mx-auto w-full max-w-[1600px] flex-1 px-2.5 pb-24 pt-3 sm:px-5 sm:pt-4 lg:pb-8">
            {active === 'dashboard' && (
              <div className="mb-3 lg:hidden">
                <h1 className="text-lg font-extrabold tracking-tight">Dashboard</h1>
              </div>
            )}
            {RichPage ? (
              <RichPage />
            ) : config ? (
              <RecordScreen config={config} />
            ) : (
              <PlaceholderPage id={active} />
            )}
          </main>
        </div>
      </div>

      <BottomNav active={active} onNavigate={navigate} onMore={() => setDrawer(true)} />
    </div>
  )
}

function PlaceholderPage({ id }) {
  const { label } = findNav(id)
  return (
    <div className="grid min-h-[50vh] place-items-center text-center">
      <div>
        <h1 className="text-xl font-extrabold">{label}</h1>
        <p className="mt-2 text-sm text-muted">This module is part of the CRM and will open here.</p>
      </div>
    </div>
  )
}
