# Velmurugan Agencies — Petrol Bunk CRM Dashboard

An advanced, aesthetic dashboard for a fuel station (petrol bunk) CRM. Built as a
**client demo** with realistic mock data — a redesign of the existing
`velmuruganagencies.ymtsindia.in` dashboard into a decision-making cockpit.

> Demo build. All figures come from `src/mock/` and are illustrative. Swap that
> layer for a real API to make it live.

## Tech stack

- **React 18 + Vite**
- **Tailwind CSS** with a CSS-variable design-token layer (light + dark)
- **Recharts** for all charts
- **lucide-react** icons

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build
```

## What's in the demo

- **KPI hero row** — Today's Sale, Fuel Volume, Gross Profit, Cash in Hand, Credit
  Outstanding, Discount, each with a trend delta and sparkline.
- **Sales analytics** — sales trend (7D / 30D / 12M), product mix donut
  (Petrol / Diesel / Lubricants), shift comparison (sale vs volume).
- **Fuel stock & tank monitoring** — per-tank level gauges with reorder markers,
  stock reconciliation, low-stock alerts, ETA-to-empty.
- **Credit customer intelligence** — outstanding + overdue summary, ageing buckets,
  searchable/sortable ledger with credit-limit utilisation and over-limit flags.
- **Banks & cash** — bank balance cards, 6-month trend, daily cash reconciliation
  with short/excess flag.
- **Alerts feed** — low stock, over-limit customers, unclosed shift, price change,
  pending invoices.
- **Responsive** — desktop sidebar + dense grid, mobile bottom-nav layout.
- **Light & dark** theme toggle. **Indian number formatting** (lakh/crore) throughout.

## Structure

```
src/
  lib/          format.js, constants.js, nav.js, useTheme.js
  mock/         dashboard.js   (single source of demo data)
  components/
    ui/         Card, StatTile, Sparkline, Delta, Badge, Gauge, Icon
    layout/     Sidebar, Topbar, BottomNav
    charts/     SalesTrend, ProductMixDonut, ShiftBar, BankTrend
  features/
    dashboard/  DashboardPage + section components
    modules/    ModulePage (feature preview for other CRM modules)
```

## Next phase (not in this demo)

Live API integration, authentication, and the remaining CRM modules
(Invoice, Master, Reports, Statement Generation) beyond their navigation previews.
