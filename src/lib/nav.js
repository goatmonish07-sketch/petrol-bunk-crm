// Navigation tree mirroring the live Velmurugan Agencies software.
// Groups have `children`; leaves have an `id` used for routing.
export const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', mobile: true },
  {
    group: 'master', label: 'Master', icon: 'Database',
    children: [
      { id: 'm-fuel-products', label: 'Fuel Products' },
      { id: 'm-lubricants', label: 'Lubricants' },
      { id: 'm-credit-customer', label: 'Credit Customer' },
      { id: 'm-employees', label: 'Employees' },
      { id: 'm-expense-types', label: 'Expense Types' },
      { id: 'm-crdr-party', label: 'Busi. Crd/Debit Party' },
      { id: 'm-vendor', label: 'Vendor' },
      { id: 'm-swipe-machines', label: 'Swipe Machines' },
      { id: 'm-expiry-items', label: 'Expiry Items' },
      { id: 'm-tank-nozzle', label: 'Tank & Nozzel' },
      { id: 'm-pump-setting', label: 'Pump Setting' },
      { id: 'm-dutypay-shift', label: 'DutyPay Shift' },
      { id: 'm-print-templates', label: 'Print Templates' },
      { id: 'm-guest-entry', label: 'Guest Entry' },
      { id: 'm-denominations', label: 'Denominations' },
    ],
  },
  {
    group: 'invoice', label: 'Invoice', icon: 'ClipboardList',
    children: [
      { id: 'inv-liquid', label: 'Liquid Invoice' },
      { id: 'inv-lube', label: 'Lubricant Invoice' },
    ],
  },
  {
    group: 'day', label: 'Day Business', icon: 'IndianRupee',
    children: [
      { id: 'db-assign', label: 'Day Assignings' },
      { id: 'db-rate', label: 'Daily Sale Rate' },
      { id: 'db-sale', label: 'Sale Entry' },
      { id: 'db-lubricants', label: 'Lubricants' },
      { id: 'db-swipe', label: 'Swipe' },
      { id: 'db-credit', label: 'Credit Sale' },
      { id: 'db-expenses', label: 'Expenses' },
      { id: 'db-recovery', label: 'Recovery' },
      { id: 'db-emp-recovery', label: 'Emp Cash Recovery' },
      { id: 'db-opening', label: 'Day Opening Stock' },
      { id: 'db-settlement', label: 'Day Settlement' },
    ],
  },
  { id: 'statement', label: 'Statement Generation', icon: 'Sparkles' },
  {
    group: 'stock', label: 'Product Stock', icon: 'Truck', badge: 3,
    children: [
      { id: 'ps-report', label: 'Stock Report' },
      { id: 'ps-lubloss', label: 'Lub Loss' },
      { id: 'ps-lubstock', label: 'Lubs Stock' },
      { id: 'ps-minimum', label: 'Minimum Stock', badge: 3 },
    ],
  },
  { id: 'shift', label: 'Shift Sheet Entry', icon: 'Gem' },
  { id: 'buscr', label: 'Busi. Cr/Dr Trxns', icon: 'ArrowLeftRight' },
  { id: 'vendor', label: 'Vendor Transaction', icon: 'ArrowLeftRight' },
  { id: 'reports', label: 'Reports', icon: 'Flag' },
  { id: 'gen-invoice', label: 'Generate SaleInvoice', icon: 'Printer' },
  { id: 'generated', label: 'Generated Invoices', icon: 'ClipboardList' },
  { id: 'credit-limit', label: 'Credit Limit Reports', icon: 'Files' },
]

// Bottom-nav items for mobile (max 4 + More).
export const MOBILE_NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'db-sale', label: 'Sales', icon: 'BarChart3' },
  { id: 'ps-report', label: 'Stock', icon: 'Fuel', badge: true },
  { id: 'credit-limit', label: 'Credit', icon: 'Users' },
]

// Flatten helper: id -> { label, group label }.
export function findNav(id) {
  for (const item of NAV) {
    if (item.id === id) return { label: item.label }
    if (item.children) {
      const child = item.children.find((c) => c.id === id)
      if (child) return { label: child.label, group: item.label }
    }
  }
  return { label: 'Dashboard' }
}
