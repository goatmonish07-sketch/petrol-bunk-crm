// The 21 reports from the live software's Reports screen. Each opens a
// filter + table view (reusing RecordScreen), with working CSV/PDF export.

const F = [
  { name: 'fromDate', label: 'From Date', type: 'date' },
  { name: 'toDate', label: 'To Date', type: 'date' },
]
const exp = ['Copy', 'CSV', 'PDF', 'Print']

export const REPORT_LIST = [
  { id: 'r-all-credit', name: 'All Credit Customers', group: 'Credit', icon: 'Users' },
  { id: 'r-attendance', name: 'Attendance', group: 'Staff', icon: 'Users' },
  { id: 'r-busi-flow', name: 'Busi. Credit/Debit Flow', group: 'Accounts', icon: 'ArrowLeftRight' },
  { id: 'r-bowser', name: "Bowser Transaction's", group: 'Stock', icon: 'Truck' },
  { id: 'r-cust-statement', name: 'Customer Account Statement', group: 'Credit', icon: 'FileText' },
  { id: 'r-rate-history', name: 'Daily Rate History', group: 'Sales', icon: 'Tag' },
  { id: 'r-stock-sale-reg', name: 'Daily Stock/Sale Register', group: 'Stock', icon: 'BarChart3' },
  { id: 'r-business-summary', name: 'Daily Business Summary', group: 'Daily', icon: 'IndianRupee' },
  { id: 'r-discounts', name: 'Discounts Offered', group: 'Sales', icon: 'Tag' },
  { id: 'r-expenditure', name: 'Expenditure', group: 'Accounts', icon: 'Wallet' },
  { id: 'r-taxation', name: 'Taxation', group: 'Statutory', icon: 'FileText' },
  { id: 'r-guest-sales', name: 'Guest Customer Sales', group: 'Sales', icon: 'Users' },
  { id: 'r-lub-stock', name: 'Lubricants Stock', group: 'Stock', icon: 'Package' },
  { id: 'r-purchase', name: 'Purchase', group: 'Stock', icon: 'Truck' },
  { id: 'r-employee-status', name: 'Employee Status', group: 'Staff', icon: 'Users' },
  { id: 'r-sales', name: 'Sales', group: 'Sales', icon: 'BarChart3' },
  { id: 'r-stock-variation', name: 'Stock Variation', group: 'Stock', icon: 'AlertTriangle' },
  { id: 'r-swipe', name: 'Swipe', group: 'Accounts', icon: 'CreditCard' },
  { id: 'r-vendor-txns', name: 'Vendor Transactions', group: 'Accounts', icon: 'ArrowLeftRight' },
  { id: 'r-feedback', name: 'FeedBack', group: 'Other', icon: 'Flag' },
  { id: 'r-interest', name: 'Interest Transactions', group: 'Credit', icon: 'IndianRupee' },
]

export const REPORT_GROUPS = ['All', 'Daily', 'Sales', 'Credit', 'Stock', 'Accounts', 'Staff', 'Statutory', 'Other']

const col = (key, label, opts = {}) => ({ key, label, ...opts })

export const REPORTS = {
  'r-all-credit': {
    title: 'All Credit Customers', filters: F,
    table: { exports: exp, minWidth: 600, initialSort: { key: 'due', dir: 'desc' }, columns: [
      col('sno', 'S.No'), col('name', 'Customer', { sortable: true }), col('mobile', 'Mobile'),
      col('limit', 'Credit Limit', { align: 'right', format: 'inr' }),
      col('due', 'Due', { align: 'right', sortable: true, format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, name: 'Sri Balaji Traders', mobile: '9876543210', limit: 500000, due: 225000 },
      { id: 2, sno: 2, name: 'Kaveri Enterprises', mobile: '8765432109', limit: 300000, due: 276000 },
      { id: 3, sno: 3, name: 'Raman Stores', mobile: '7654321098', limit: 250000, due: 275000 },
      { id: 4, sno: 4, name: 'A S Gurusamy', mobile: '7540070023', limit: 200000, due: 139148 },
    ] },
  },
  'r-attendance': {
    title: 'Attendance', filters: F,
    table: { exports: exp, minWidth: 560, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('employee', 'Employee'), col('status', 'Status'), col('inTime', 'In'), col('outTime', 'Out'),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', employee: 'Kumar', status: 'Present', inTime: '06:02', outTime: '14:05' },
      { id: 2, sno: 2, date: '22-May-2025', employee: 'Suresh', status: 'Present', inTime: '05:58', outTime: '14:02' },
      { id: 3, sno: 3, date: '22-May-2025', employee: 'Anbu', status: 'Absent', inTime: '—', outTime: '—' },
    ] },
  },
  'r-busi-flow': {
    title: 'Business Credit / Debit Flow', filters: F,
    table: { exports: exp, minWidth: 560, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('party', 'Party'),
      col('credit', 'Credit', { align: 'right', format: 'crdr' }), col('debit', 'Debit', { align: 'right', format: 'crdr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', party: 'Capital Account', credit: 200000 },
      { id: 2, sno: 2, date: '22-May-2025', party: 'Owner Drawings', debit: 50000 },
    ] },
  },
  'r-bowser': {
    title: "Bowser Transaction's", filters: F,
    table: { exports: exp, minWidth: 600, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('bowser', 'Bowser'), col('product', 'Product'),
      col('qty', 'Qty', { align: 'right', format: 'number' }), col('amount', 'Amount', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '20-May-2025', bowser: 'TN-05-KL-7788', product: 'Diesel (HSD)', qty: 2000, amount: 182200 },
    ] },
  },
  'r-cust-statement': {
    title: 'Customer Account Statement', filters: [...F, { name: 'customer', label: 'Customer', type: 'select', options: ['Sri Balaji Traders', 'Raman Stores', 'Kaveri Enterprises'] }],
    table: { exports: exp, minWidth: 600, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('particulars', 'Particulars'),
      col('debit', 'Debit', { align: 'right', format: 'crdr' }), col('credit', 'Credit', { align: 'right', format: 'crdr' }),
      col('balance', 'Balance', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '18-May-2025', particulars: 'Diesel Sale', debit: 29152, balance: 254152 },
      { id: 2, sno: 2, date: '20-May-2025', particulars: 'Payment Received', credit: 120000, balance: 134152 },
    ] },
  },
  'r-rate-history': {
    title: 'Daily Rate History', filters: F,
    table: { exports: exp, minWidth: 480, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('product', 'Product'), col('rate', 'Rate', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', product: 'Petrol (MS)', rate: 102.6 },
      { id: 2, sno: 2, date: '21-May-2025', product: 'Petrol (MS)', rate: 102.4 },
      { id: 3, sno: 3, date: '22-May-2025', product: 'Diesel (HSD)', rate: 91.1 },
    ] },
  },
  'r-stock-sale-reg': {
    title: 'Daily Stock / Sale Register', filters: F,
    table: { exports: exp, minWidth: 600, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('product', 'Product'),
      col('opening', 'Opening', { align: 'right', format: 'number' }), col('sale', 'Sale', { align: 'right', format: 'number' }),
      col('closing', 'Closing', { align: 'right', format: 'number' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', product: 'Petrol (MS)', opening: 22800, sale: 2600, closing: 21500 },
      { id: 2, sno: 2, date: '22-May-2025', product: 'Diesel (HSD)', opening: 20000, sale: 3928, closing: 18200 },
    ] },
  },
  'r-business-summary': {
    title: 'Daily Business Summary', filters: F,
    table: { exports: exp, minWidth: 640, columns: [
      col('sno', 'S.No'), col('date', 'Date'),
      col('fuelSale', 'Fuel Sale', { align: 'right', format: 'inr' }), col('lubSale', 'Lub Sale', { align: 'right', format: 'inr' }),
      col('credit', 'Credit', { align: 'right', format: 'inr' }), col('expense', 'Expense', { align: 'right', format: 'inr' }),
      col('cash', 'Cash', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', fuelSale: 678633, lubSale: 960, credit: 61948, expense: 112350, cash: 462350 },
      { id: 2, sno: 2, date: '21-May-2025', fuelSale: 645200, lubSale: 1480, credit: 54200, expense: 26000, cash: 448900 },
    ] },
  },
  'r-discounts': {
    title: 'Discounts Offered', filters: F,
    table: { exports: exp, minWidth: 520, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('customer', 'Customer'), col('product', 'Product'), col('discount', 'Discount', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', customer: 'Raman Stores', product: 'Diesel (HSD)', discount: 320 },
      { id: 2, sno: 2, date: '22-May-2025', customer: 'Walk-in', product: 'Petrol (MS)', discount: 50 },
    ] },
  },
  'r-expenditure': {
    title: 'Expenditure', filters: F,
    table: { exports: exp, minWidth: 480, initialSort: { key: 'amount', dir: 'desc' }, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('head', 'Head'), col('amount', 'Amount', { align: 'right', sortable: true, format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', head: 'Salary', amount: 96000 },
      { id: 2, sno: 2, date: '21-May-2025', head: 'Electricity', amount: 18600 },
      { id: 3, sno: 3, date: '20-May-2025', head: 'Maintenance', amount: 7400 },
    ] },
  },
  'r-taxation': {
    title: 'Taxation', filters: F,
    table: { exports: exp, minWidth: 600, columns: [
      col('sno', 'S.No'), col('period', 'Period'), col('taxable', 'Taxable Value', { align: 'right', format: 'inr' }),
      col('cgst', 'CGST', { align: 'right', format: 'inr' }), col('sgst', 'SGST', { align: 'right', format: 'inr' }),
      col('total', 'Total Tax', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, period: 'May 2025', taxable: 4200000, cgst: 0, sgst: 0, total: 0 },
      { id: 2, sno: 2, period: 'Lubricants May', taxable: 42000, cgst: 3780, sgst: 3780, total: 7560 },
    ] },
  },
  'r-guest-sales': {
    title: 'Guest Customer Sales', filters: F,
    table: { exports: exp, minWidth: 560, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('guest', 'Guest'), col('product', 'Product'),
      col('qty', 'Qty', { align: 'right', format: 'number' }), col('amount', 'Amount', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', guest: 'Walk-in Guest', product: 'Petrol (MS)', qty: 40, amount: 4104 },
    ] },
  },
  'r-lub-stock': {
    title: 'Lubricants Stock', filters: F,
    table: { exports: exp, minWidth: 520, columns: [
      col('sno', 'S.No'), col('product', 'Product'), col('opening', 'Opening', { align: 'right', format: 'number' }),
      col('sale', 'Sale', { align: 'right', format: 'number' }), col('closing', 'Closing', { align: 'right', format: 'number' }),
    ], rows: [
      { id: 1, sno: 1, product: 'Engine Oil 15W40', opening: 48, sale: 40, closing: 8 },
      { id: 2, sno: 2, product: 'Coolant', opening: 30, sale: 6, closing: 24 },
    ] },
  },
  'r-purchase': {
    title: 'Purchase', filters: [...F, { name: 'vendor', label: 'Vendor', type: 'select', options: ['IOCL', 'Castrol Distributor'] }],
    table: { exports: exp, minWidth: 640, initialSort: { key: 'amount', dir: 'desc' }, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('vendor', 'Vendor'), col('product', 'Product'),
      col('qty', 'Qty', { align: 'right', format: 'number' }), col('amount', 'Amount', { align: 'right', sortable: true, format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '20-May-2025', vendor: 'IOCL', product: 'Diesel (HSD)', qty: 5000, amount: 442000 },
      { id: 2, sno: 2, date: '19-May-2025', vendor: 'IOCL', product: 'Petrol (MS)', qty: 6000, amount: 595200 },
    ] },
  },
  'r-employee-status': {
    title: 'Employee Status', filters: [],
    table: { exports: exp, minWidth: 520, columns: [
      col('sno', 'S.No'), col('name', 'Name'), col('role', 'Role'),
      col('status', 'Status', { format: 'badge', tone: (r) => (r.status === 'Active' ? 'positive' : 'negative') }),
      col('salary', 'Salary', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, name: 'Kumar', role: 'Attendant', status: 'Active', salary: 18000 },
      { id: 2, sno: 2, name: 'Suresh', role: 'Cashier', status: 'Active', salary: 22000 },
      { id: 3, sno: 3, name: 'Ravi', role: 'Attendant', status: 'Inactive', salary: 17000 },
    ] },
  },
  'r-sales': {
    title: 'Sales', filters: [...F, { name: 'product', label: 'Product', type: 'select', options: ['Petrol', 'Diesel', 'Lubricants'] }],
    table: { exports: exp, minWidth: 520, initialSort: { key: 'amount', dir: 'desc' }, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('product', 'Product'),
      col('qty', 'Qty', { align: 'right', format: 'number' }), col('amount', 'Amount', { align: 'right', sortable: true, format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', product: 'Petrol (MS)', qty: 2600, amount: 1025000 },
      { id: 2, sno: 2, date: '22-May-2025', product: 'Diesel (HSD)', qty: 3928, amount: 960000 },
    ] },
  },
  'r-stock-variation': {
    title: 'Stock Variation', filters: F,
    table: { exports: exp, minWidth: 600, columns: [
      col('sno', 'S.No'), col('product', 'Product'), col('book', 'Book Stock', { align: 'right', format: 'number' }),
      col('physical', 'Physical', { align: 'right', format: 'number' }), col('variation', 'Variation', { align: 'right', format: 'number' }),
    ], rows: [
      { id: 1, sno: 1, product: 'Petrol (MS)', book: 21500, physical: 21486, variation: -14 },
      { id: 2, sno: 2, product: 'Diesel (HSD)', book: 18200, physical: 18212, variation: 12 },
    ] },
  },
  'r-swipe': {
    title: 'Swipe', filters: F,
    table: { exports: exp, minWidth: 520, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('bank', 'Bank'), col('cardType', 'Card Type'), col('amount', 'Amount', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', bank: 'ICICI Bank', cardType: 'UPI', amount: 184500 },
      { id: 2, sno: 2, date: '21-May-2025', bank: 'ICICI Bank', cardType: 'Visa', amount: 45200 },
    ] },
  },
  'r-vendor-txns': {
    title: 'Vendor Transactions', filters: [...F, { name: 'vendor', label: 'Vendor', type: 'select', options: ['IOCL', 'D WATER'] }],
    table: { exports: exp, minWidth: 560, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('vendor', 'Vendor'),
      col('credit', 'Credit', { align: 'right', format: 'crdr' }), col('debit', 'Debit', { align: 'right', format: 'crdr' }),
    ], rows: [
      { id: 1, sno: 1, date: '17-Aug-2026', vendor: 'IOCL', credit: 1407088 },
      { id: 2, sno: 2, date: '20-Jul-2026', vendor: 'D WATER', debit: 1230 },
    ] },
  },
  'r-feedback': {
    title: 'FeedBack', filters: F,
    table: { exports: exp, minWidth: 560, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('customer', 'Customer'), col('rating', 'Rating'), col('comment', 'Comment'),
    ], rows: [
      { id: 1, sno: 1, date: '20-May-2025', customer: 'Raman Stores', rating: '★★★★★', comment: 'Quick service' },
      { id: 2, sno: 2, date: '18-May-2025', customer: 'Walk-in', rating: '★★★★', comment: 'Good' },
    ] },
  },
  'r-interest': {
    title: 'Interest Transactions', filters: F,
    table: { exports: exp, minWidth: 600, columns: [
      col('sno', 'S.No'), col('date', 'Date'), col('customer', 'Customer'),
      col('principal', 'Principal', { align: 'right', format: 'inr' }), col('rate', 'Rate %'),
      col('interest', 'Interest', { align: 'right', format: 'inr' }),
    ], rows: [
      { id: 1, sno: 1, date: '30-Apr-2025', customer: 'Kaveri Enterprises', principal: 276000, rate: '1.5', interest: 4140 },
    ] },
  },
}
