// Mock datasets for the operational module screens (Sales, Stock, Banks, Reports).
// Illustrative demo data — swap for a real API later.

// ---- Sales ----------------------------------------------------------------
export const salesTxns = [
  { id: 'INV-24188', time: '09:42 AM', shift: 'Morning', product: 'Petrol', nozzle: 'MPD-1', qty: 32.5, rate: 102.6, amount: 3334.5, mode: 'Cash', customer: 'Walk-in' },
  { id: 'INV-24189', time: '10:05 AM', shift: 'Morning', product: 'Diesel', nozzle: 'MPD-3', qty: 210.0, rate: 91.1, amount: 19131.0, mode: 'Credit', customer: 'Sri Balaji Traders' },
  { id: 'INV-24190', time: '10:31 AM', shift: 'Morning', product: 'Petrol', nozzle: 'MPD-2', qty: 15.2, rate: 102.6, amount: 1559.52, mode: 'UPI', customer: 'Walk-in' },
  { id: 'INV-24191', time: '11:12 AM', shift: 'Morning', product: 'Lubricants', nozzle: '—', qty: 2, rate: 480, amount: 960.0, mode: 'Cash', customer: 'Walk-in' },
  { id: 'INV-24192', time: '12:47 PM', shift: 'Morning', product: 'Diesel', nozzle: 'MPD-4', qty: 150.0, rate: 91.1, amount: 13665.0, mode: 'Credit', customer: 'Kaveri Enterprises' },
  { id: 'INV-24193', time: '02:18 PM', shift: 'Evening', product: 'Petrol', nozzle: 'MPD-1', qty: 40.0, rate: 102.6, amount: 4104.0, mode: 'Card', customer: 'Walk-in' },
  { id: 'INV-24194', time: '03:55 PM', shift: 'Evening', product: 'Diesel', nozzle: 'MPD-3', qty: 320.0, rate: 91.1, amount: 29152.0, mode: 'Credit', customer: 'Raman Stores' },
  { id: 'INV-24195', time: '05:20 PM', shift: 'Evening', product: 'Petrol', nozzle: 'MPD-2', qty: 25.8, rate: 102.6, amount: 2647.08, mode: 'UPI', customer: 'Walk-in' },
  { id: 'INV-24196', time: '07:03 PM', shift: 'Evening', product: 'Diesel', nozzle: 'MPD-4', qty: 180.0, rate: 91.1, amount: 16398.0, mode: 'Cash', customer: 'Walk-in' },
  { id: 'INV-24197', time: '08:41 PM', shift: 'Evening', product: 'Petrol', nozzle: 'MPD-1', qty: 55.0, rate: 102.6, amount: 5643.0, mode: 'Credit', customer: 'Five Star Logistics' },
]

// ---- Stock ----------------------------------------------------------------
export const stockItems = [
  { id: 1, product: 'Petrol (MS)', opening: 22800, purchase: 6000, sales: 2600.16, closing: 21500, capacity: 30000, reorder: 6000, unit: 'Ltr' },
  { id: 2, product: 'Diesel (HSD)', opening: 20000, purchase: 5000, sales: 3927.66, closing: 18200, capacity: 40000, reorder: 8000, unit: 'Ltr' },
  { id: 3, product: 'Engine Oil 15W40', opening: 48, purchase: 0, sales: 40, closing: 8, capacity: 120, reorder: 20, unit: 'Ltr' },
  { id: 4, product: 'Coolant', opening: 30, purchase: 0, sales: 6, closing: 24, capacity: 60, reorder: 10, unit: 'Ltr' },
  { id: 5, product: '2T Oil Sachets', opening: 210, purchase: 100, sales: 45, closing: 265, capacity: 500, reorder: 80, unit: 'Nos' },
]

export const purchases = [
  { id: 'PO-8841', date: '20 May 2025', vendor: 'IndianOil Terminal', product: 'Diesel (HSD)', qty: 5000, rate: 88.4, amount: 442000, status: 'Received' },
  { id: 'PO-8842', date: '19 May 2025', vendor: 'IndianOil Terminal', product: 'Petrol (MS)', qty: 6000, rate: 99.2, amount: 595200, status: 'Received' },
  { id: 'PO-8843', date: '22 May 2025', vendor: 'Castrol Distributor', product: '2T Oil Sachets', qty: 100, rate: 42, amount: 4200, status: 'In Transit' },
  { id: 'PO-8844', date: '22 May 2025', vendor: 'IndianOil Terminal', product: 'Diesel (HSD)', qty: 8000, rate: 88.4, amount: 707200, status: 'Ordered' },
]

// ---- Bank / cash transactions --------------------------------------------
export const bankTxns = [
  { id: 1, date: '22 May 2025', particulars: 'Card & UPI settlement', bank: 'ICICI Bank', type: 'Credit', amount: 184500 },
  { id: 2, date: '22 May 2025', particulars: 'Fuel purchase — IndianOil', bank: 'ICICI Bank', type: 'Debit', amount: 442000 },
  { id: 3, date: '21 May 2025', particulars: 'Customer collection — Raman Stores', bank: 'Indian Bank', type: 'Credit', amount: 120000 },
  { id: 4, date: '21 May 2025', particulars: 'Electricity bill', bank: 'Indian Bank', type: 'Debit', amount: 18600 },
  { id: 5, date: '20 May 2025', particulars: 'Card & UPI settlement', bank: 'ICICI Bank', type: 'Credit', amount: 162300 },
  { id: 6, date: '20 May 2025', particulars: 'Staff salary', bank: 'ICICI Bank', type: 'Debit', amount: 96000 },
  { id: 7, date: '19 May 2025', particulars: 'Customer collection — Kaveri Enterprises', bank: 'Indian Bank', type: 'Credit', amount: 85000 },
]

// ---- Reports catalogue ----------------------------------------------------
export const reportsList = [
  { id: 'day-business', name: 'Day Business Report', group: 'Daily', icon: 'IndianRupee', desc: 'Full day sale, cash, credit & expense summary' },
  { id: 'shift-sheet', name: 'Shift Sheet Statement', group: 'Daily', icon: 'Clock', desc: 'Nozzle readings & attendant reconciliation' },
  { id: 'fuel-sale', name: 'Fuel Sale Register', group: 'Sales', icon: 'Fuel', desc: 'Product & nozzle-wise sale register' },
  { id: 'credit-outstanding', name: 'Credit Outstanding', group: 'Credit', icon: 'Users', desc: 'Customer-wise outstanding & ageing' },
  { id: 'credit-limit', name: 'Credit Limit Report', group: 'Credit', icon: 'FileText', desc: 'Limit utilisation & over-limit accounts' },
  { id: 'stock-movement', name: 'Stock Movement', group: 'Stock', icon: 'BarChart3', desc: 'Opening, purchase, sale & closing stock' },
  { id: 'purchase-register', name: 'Purchase Register', group: 'Stock', icon: 'Landmark', desc: 'Vendor purchase & payment register' },
  { id: 'gst-summary', name: 'GST Summary', group: 'Statutory', icon: 'FileText', desc: 'Output tax & HSN-wise summary' },
]

export const reportGroups = ['All', 'Daily', 'Sales', 'Credit', 'Stock', 'Statutory']
