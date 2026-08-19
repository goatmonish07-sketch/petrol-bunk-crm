// Navigation model. `mobile` marks the items shown in the bottom bar.
export const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', mobile: true },
  { id: 'sales', label: 'Sales', icon: 'BarChart3', mobile: true },
  { id: 'stock', label: 'Fuel Stock', icon: 'Fuel', mobile: true, badge: 3 },
  { id: 'credit', label: 'Credit Customers', icon: 'Users', mobile: true },
  { id: 'banks', label: 'Banks & Cash', icon: 'Landmark' },
  { id: 'reports', label: 'Reports', icon: 'FileText' },
  { id: 'alerts', label: 'Alerts', icon: 'Bell', badge: 3 },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
]

// Feature summaries used by the "module preview" pages in the demo.
export const MODULE_FEATURES = {
  sales: {
    title: 'Sales & Invoicing',
    blurb: 'Every rupee of fuel and lubricant sale, by shift, nozzle and product.',
    items: [
      'Shift-wise & nozzle-wise sale breakup',
      'Fuel vs lubricant product mix',
      'Discounts, testing & own-use adjustments',
      'Generate & track sale invoices (GST-ready)',
      'Daily / weekly / monthly sale trends',
    ],
  },
  stock: {
    title: 'Fuel Stock & Tank Monitoring',
    blurb: 'Live tank levels, purchase reconciliation and stock-out forecasting.',
    items: [
      'Per-tank level gauges with reorder thresholds',
      'Opening → purchase → sales → closing reconciliation',
      'Stock-out ETA at current run-rate',
      'Density / evaporation loss tracking',
      'Low-stock alerts feeding the notification centre',
    ],
  },
  credit: {
    title: 'Credit Customer Intelligence',
    blurb: 'Outstanding, credit limits and ageing across all credit accounts.',
    items: [
      'Outstanding & overdue account summary',
      'Ageing buckets (Current / 30 / 60 / 90+)',
      'Credit-limit utilisation with over-limit alerts',
      'Searchable, sortable customer ledger',
      'One-tap payment reminders',
    ],
  },
  banks: {
    title: 'Banks & Cash',
    blurb: 'Bank balances, multi-month trends and daily cash reconciliation.',
    items: [
      'Per-bank balance cards & 6-month trend',
      'Day cash reconciliation with short / excess flag',
      'Business credit / debit transactions',
      'Vendor & purchase payments',
    ],
  },
  reports: {
    title: 'Reports & Statements',
    blurb: 'Printable statements and drill-down reports for every module.',
    items: [
      'Day business & shift sheet statements',
      'Credit limit & outstanding reports',
      'Product stock movement reports',
      'Export to PDF / print',
    ],
  },
  alerts: {
    title: 'Alerts & Notifications',
    blurb: 'One place for everything that needs the owner’s attention today.',
    items: [
      'Low-stock & reorder alerts',
      'Customer over credit-limit warnings',
      'Unclosed shift & pending invoice reminders',
      'Fuel price-change due notices',
    ],
  },
  settings: {
    title: 'Settings',
    blurb: 'Business profile, users, products, pricing and preferences.',
    items: [
      'Business & GST profile',
      'Products, nozzles & tank configuration',
      'User roles & access control',
      'Theme & display preferences',
    ],
  },
}
