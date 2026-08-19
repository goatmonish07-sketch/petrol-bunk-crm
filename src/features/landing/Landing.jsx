import { Icon } from '../../components/ui/Icon'
import { StationHero } from './StationHero'
import { DashboardPreview } from './DashboardPreview'

const NAV = ['Features', 'Dashboard', 'Modules', 'Pricing', 'About Us', 'Contact']

const HERO_FEATURES = [
  { icon: 'LayoutDashboard', title: 'Real-time Dashboard', sub: 'Business at a glance' },
  { icon: 'BarChart3', title: 'Sales & Profit Analytics', sub: 'Data driven decisions' },
  { icon: 'Fuel', title: 'Fuel Stock Monitoring', sub: 'Live tank & reorder levels' },
  { icon: 'Landmark', title: 'Cash & Bank Reconciliation', sub: 'Accurate & transparent' },
  { icon: 'Users', title: 'Credit Customer Control', sub: 'Track & reduce outstanding' },
  { icon: 'Bell', title: 'Alerts & Notifications', sub: 'Never miss important things' },
]

const STATS = [
  { icon: 'Landmark', value: '500+', label: 'Stations Trust Us' },
  { icon: 'Fuel', value: '10L+', label: 'Litres Sold Daily' },
  { icon: 'IndianRupee', value: '₹100Cr+', label: 'Sales Managed' },
  { icon: 'CheckCircle2', value: '99.9%', label: 'Uptime & Reliability' },
]

const WHY = [
  { icon: 'Gem', title: 'Complete Control', desc: 'Manage sales, stock, cash, credit & more in one place.' },
  { icon: 'Clock', title: 'Save Time', desc: 'Automate daily operations & reduce manual work.' },
  { icon: 'TrendingUp', title: 'Increase Profit', desc: 'Data-driven insights to boost your bottom line.' },
  { icon: 'Droplet', title: 'Reduce Losses', desc: 'Track every drop, every rupee with accuracy.' },
  { icon: 'Bell', title: 'Stay Alert', desc: 'Instant alerts for low stock, overdue & important tasks.' },
  { icon: 'Sparkles', title: 'Grow Confidently', desc: 'Scalable solution to grow your business.' },
]

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-ink">
        <Icon name="Droplet" className="h-5 w-5" />
      </span>
      <div className="leading-none">
        <div className="text-[15px] font-extrabold tracking-tight">
          VELMURUGAN <span className="text-petrol">AGENCIES</span>
        </div>
        <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">Petrol Bunk CRM</div>
      </div>
    </div>
  )
}

export function Landing({ onEnter }) {
  return (
    <div className="min-h-dvh bg-bg text-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={onEnter}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {n}
              </button>
            ))}
          </nav>
          <button onClick={onEnter} className="btn-primary px-4">Request Demo</button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[12px] font-semibold text-ink shadow-card">
            <Icon name="Fuel" className="h-3.5 w-3.5 text-petrol" /> All-in-One Petrol Bunk Management
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Power Your Station.
            <br />
            Manage <span className="text-petrol">Every Drop.</span>
          </h1>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            A complete CRM solution to manage sales, stock, cash, credit customers and
            more — all from one powerful dashboard.
          </p>

          {/* feature grid */}
          <div className="mt-7 grid max-w-lg grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {HERO_FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface text-ink shadow-card">
                  <Icon name={f.icon} className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-bold">{f.title}</div>
                  <div className="text-[12px] text-muted">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onEnter} className="btn-primary px-5 py-3 text-[15px]">
              Explore Dashboard <Icon name="ArrowRight" className="h-4 w-4" />
            </button>
            <button onClick={onEnter} className="btn-ghost px-5 py-3 text-[15px]">Request Demo</button>
          </div>
        </div>

        {/* Hero visual: station scene + floating dashboard preview */}
        <div className="relative pb-14 sm:pb-16">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-pop" style={{ aspectRatio: '5 / 4' }}>
            <StationHero />
          </div>
          <div className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 translate-y-4">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="mx-auto mt-20 max-w-[1200px] px-4 sm:mt-24 sm:px-6 lg:mt-28">
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-brand px-6 py-7 text-brand-ink sm:grid-cols-4 sm:px-10">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-ink/10 text-petrol">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-xl font-extrabold tnum sm:text-2xl">{s.value}</div>
                <div className="text-[12px] text-brand-ink/70">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Why Choose <span className="text-petrol">Velmurugan Agencies CRM?</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
          {WHY.map((w) => (
            <div key={w.title} className="text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-surface text-ink shadow-card">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <div className="mt-3 text-sm font-bold">{w.title}</div>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA + footer */}
      <section className="bg-brand text-brand-ink">
        <div className="mx-auto max-w-[1200px] px-4 py-14 text-center sm:px-6">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Ready to power your station?</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-brand-ink/70">
            See the full dashboard in action — no setup required.
          </p>
          <button
            onClick={onEnter}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-petrol px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Explore Dashboard <Icon name="ArrowRight" className="h-4 w-4" />
          </button>
        </div>
        <div className="border-t border-brand-ink/10">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-5 text-[12px] text-brand-ink/60 sm:flex-row sm:px-6">
            <span>© {new Date().getFullYear()} Velmurugan Agencies. All rights reserved.</span>
            <span>Petrol Bunk CRM — Demo build</span>
          </div>
        </div>
      </section>
    </div>
  )
}
