// Mock data for the dashboard, matched to the approved demo mockup.
// Swap this module for a real API layer later without touching components.

export const business = {
  name: 'Velmurugan Agencies',
  tagline: 'Petrol Bunk CRM',
  date: '22 May 2025',
  shiftStartedAt: '06:00 AM',
}

// A small realistic 7-day sparkline generator (value in ₹ or ltr, index-based)
const spark = (arr) => arr.map((v, i) => ({ i, v }))

export const kpis = [
  {
    id: 'sale',
    label: "Today's Total Sale",
    value: 2129995.46,
    kind: 'inr',
    delta: 12.4,
    icon: 'IndianRupee',
    spark: spark([16.2, 17.1, 16.4, 18.0, 17.6, 19.9, 21.3]),
  },
  {
    id: 'volume',
    label: 'Fuel Volume Sold',
    value: 5840,
    unit: 'Ltr',
    kind: 'ltr',
    delta: 4.8,
    icon: 'Fuel',
    spark: spark([5.1, 5.3, 5.2, 5.5, 5.4, 5.7, 5.84]),
  },
  {
    id: 'profit',
    label: 'Gross Profit',
    value: 186245,
    kind: 'inr',
    delta: 8.2,
    icon: 'TrendingUp',
    spark: spark([1.55, 1.62, 1.58, 1.7, 1.66, 1.8, 1.86]),
  },
  {
    id: 'cash',
    label: 'Cash In Hand',
    value: 462350,
    kind: 'inr',
    delta: 3.6,
    icon: 'Wallet',
    spark: spark([4.2, 4.35, 4.28, 4.4, 4.5, 4.55, 4.62]),
  },
  {
    id: 'credit',
    label: 'Credit Outstanding',
    value: 2129995.46,
    kind: 'inr',
    delta: 5.7,
    icon: 'Users',
    spark: spark([19.8, 20.2, 20.0, 20.6, 20.9, 21.1, 21.3]),
  },
  {
    id: 'discount',
    label: 'Discount Given',
    value: 12540,
    kind: 'inr',
    delta: -2.1,
    icon: 'Tag',
    spark: spark([13.4, 13.1, 13.0, 12.9, 12.7, 12.6, 12.54]),
  },
]

// Sales trend by range. Values in ₹ lakh for display convenience.
export const salesTrend = {
  '7d': [
    { label: '16 May', value: 1280000 },
    { label: '17 May', value: 1710000 },
    { label: '18 May', value: 1440000 },
    { label: '19 May', value: 1660000 },
    { label: '20 May', value: 1520000 },
    { label: '21 May', value: 1990000 },
    { label: '22 May', value: 2129995 },
  ],
  '30d': Array.from({ length: 30 }, (_, i) => ({
    label: `${i + 1}`,
    value: 1300000 + Math.round(Math.sin(i / 3) * 300000 + i * 12000),
  })),
  '12m': [
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
    'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May',
  ].map((m, i) => ({ label: m, value: 38000000 + i * 1400000 + (i % 3) * 900000 })),
}

export const productMix = [
  { name: 'Petrol', value: 1025000, pct: 48, token: 'data' },
  { name: 'Diesel', value: 960000, pct: 45, token: 'data-2' },
  { name: 'Lubricants', value: 144995, pct: 7, token: 'lube' },
]

export const shiftComparison = [
  { shift: 'Morning', window: '06:00 AM – 02:00 PM', sale: 1145000, volume: 3100 },
  { shift: 'Evening', window: '02:00 PM – 10:00 PM', sale: 984995, volume: 2740 },
]

export const nozzleSales = [
  { nozzle: 'MPD-1 · Petrol', volume: 1620, amount: 583200 },
  { nozzle: 'MPD-2 · Petrol', volume: 1480, amount: 532800 },
  { nozzle: 'MPD-3 · Diesel', volume: 1710, amount: 155610 },
  { nozzle: 'MPD-4 · Diesel', volume: 1030, amount: 93730 },
]

export const tanks = [
  {
    id: 'petrol',
    name: 'Petrol Tank',
    token: 'petrol',
    current: 21500,
    capacity: 30000,
    etaDays: 4.6,
    reorderPct: 20,
  },
  {
    id: 'diesel',
    name: 'Diesel Tank',
    token: 'diesel',
    current: 18200,
    capacity: 40000,
    etaDays: 2.1,
    reorderPct: 20,
  },
]

export const stockReconciliation = {
  product: 'Diesel',
  rows: [
    { label: 'Opening Stock', value: 20000, sign: '' },
    { label: 'Purchase', value: 5000, sign: '+' },
    { label: 'Sales', value: 6800, sign: '−' },
    { label: 'Loss / Adjustment', value: null, sign: '−' },
  ],
  closing: 18200,
}

export const lowStockAlerts = [
  { name: 'Diesel Tank', note: 'Stock below 50%' },
  { name: 'Lubricant (15W40)', note: 'Stock below 10 Ltr' },
  { name: 'Petrol Tank', note: 'Stock below 75%' },
]

export const alerts = [
  { id: 1, title: 'Diesel Low Stock', note: 'Stock below 50%', icon: 'Fuel', tone: 'warn' },
  { id: 2, title: 'Customer Over Limit', note: '6 Accounts', icon: 'Users', tone: 'negative' },
  { id: 3, title: 'Shift Pending Closure', note: 'Day shift not closed', icon: 'Clock', tone: 'muted' },
  { id: 4, title: 'Price Change Due', note: 'Petrol price revision', icon: 'Tag', tone: 'muted' },
  { id: 5, title: 'Pending Invoices', note: '12 Invoices', icon: 'FileText', tone: 'muted' },
]

export const banks = [
  { id: 'icici', name: 'ICICI Bank', account: 'A/c No. 1234 5678 9012', balance: 860250 },
  { id: 'indian', name: 'Indian Bank', account: 'A/c No. 9876 5432 1098', balance: 520450 },
]

export const bankTrend = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'].map((m, i) => ({
  label: m,
  icici: 620000 + i * 48000 + (i % 2) * 30000,
  indian: 410000 + i * 22000 + (i % 3) * 15000,
}))

export const cashReconciliation = {
  rows: [
    { label: 'Opening Cash', value: 100000, sign: '' },
    { label: 'Total Sales', value: 2129995.46, sign: '+' },
    { label: 'Expenses', value: 112350, sign: '−' },
    { label: 'Credit Sale', value: 865000, sign: '−' },
    { label: 'Collections', value: 640000, sign: '+' },
  ],
  expectedClosing: 1892645.46,
  actualClosing: 1895000,
  get variance() {
    return this.actualClosing - this.expectedClosing
  },
}

export const customers = [
  {
    id: 1, name: 'Sri Balaji Traders', mobile: '9876543210',
    limit: 500000, due: 225000, lastPaid: '20 May 2025', status: 'good',
  },
  {
    id: 2, name: 'Kaveri Enterprises', mobile: '8765432109',
    limit: 300000, due: 276000, lastPaid: '10 May 2025', status: 'near',
  },
  {
    id: 3, name: 'Raman Stores', mobile: '7654321098',
    limit: 250000, due: 275000, lastPaid: '02 May 2025', status: 'over',
  },
  {
    id: 4, name: 'A S Gurusamy', mobile: '7540070023',
    limit: 200000, due: 139148.58, lastPaid: '18 May 2025', status: 'good',
  },
  {
    id: 5, name: 'Fffc Private Ltd', mobile: '9791451600',
    limit: 150000, due: 123078.91, lastPaid: '15 May 2025', status: 'near',
  },
  {
    id: 6, name: 'Five Star Logistics', mobile: '9080706050',
    limit: 100000, due: 96499.68, lastPaid: '12 May 2025', status: 'near',
  },
  {
    id: 7, name: 'Hayagrivar Transport', mobile: '9012345678',
    limit: 120000, due: 125063.26, lastPaid: '05 May 2025', status: 'over',
  },
  {
    id: 8, name: 'Arun Prasath', mobile: '8098032801',
    limit: 50000, due: 2147.54, lastPaid: '21 May 2025', status: 'good',
  },
]

export const creditSummary = {
  totalOutstanding: 2129995.46,
  overdueAccounts: 14,
  aging: [
    { bucket: 'Current', value: 920000, pct: 43, token: 'data' },
    { bucket: '30 Days', value: 560000, pct: 26, token: 'data-2' },
    { bucket: '60 Days', value: 325000, pct: 15, token: 'warn' },
    { bucket: '90+ Days', value: 324995, pct: 16, token: 'negative' },
  ],
}
