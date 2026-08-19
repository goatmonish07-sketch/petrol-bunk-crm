// Config-driven operational screens mirroring the live software.
// Each entry: { title, blurb?, form?, filters?, table? } consumed by RecordScreen.

const VENDORS = ['IOCL', 'IndianOil Terminal', 'Castrol Distributor', 'D WATER', 'BharatPetroleum']
const BANKS = ['ICICI Bank', 'Indian Bank']
const PRODUCTS = ['Petrol (MS)', 'Diesel (HSD)', 'Engine Oil 15W40', 'Coolant', '2T Oil Sachets']
const LUBES = ['Engine Oil 15W40', 'Coolant', '2T Oil Sachets']
const CUSTOMERS = ['Sri Balaji Traders', 'Kaveri Enterprises', 'Raman Stores', 'A S Gurusamy', 'Five Star Logistics']
const ORGS = ['SHRISHTI VIDYASHRAM HR SEC SCHOOL', 'ARUN PRASATH', 'SAT SHANMUGAM LAKSHMIPURAM', 'A S Gurusamy', 'VRG CEMENT MARKATING']
const EMPLOYEES = ['Kumar', 'Suresh', 'Anbu', 'Ravi']

const dateFrom = { name: 'fromDate', label: 'From Date', type: 'date' }
const dateTo = { name: 'toDate', label: 'To Date', type: 'date' }

export const SCREENS = {
  // ---------------- Invoice ----------------
  'inv-liquid': {
    title: 'Liquid Invoice Details',
    form: {
      title: 'Invoice Entry',
      fields: [
        { name: 'date', label: 'Invoice Date', type: 'date' },
        { name: 'invoiceNo', label: 'Invoice No', type: 'text', required: true },
        { name: 'image', label: 'Upload Image', type: 'file' },
        { name: 'vendor', label: 'Vendor', type: 'select', options: VENDORS, required: true },
        { name: 'amount', label: 'Amount', type: 'number', required: true },
        { name: 'description', label: 'Description', type: 'text', colSpan: 2 },
      ],
      submitLabel: 'Save Invoice',
    },
    filters: [dateFrom, dateTo, { name: 'vendor', label: 'Vendor', type: 'select', options: VENDORS }],
    table: {
      exports: ['CSV', 'PDF'],
      minWidth: 760,
      initialSort: { key: 'date', dir: 'desc' },
      columns: [
        { key: 'sno', label: 'S.No' },
        { key: 'date', label: 'Date' },
        { key: 'invoiceNo', label: 'Invoice No', sortable: true },
        { key: 'vendor', label: 'Vendor' },
        { key: 'description', label: 'Description' },
        { key: 'amount', label: 'Amount', align: 'right', sortable: true, format: 'inr' },
      ],
      rows: [
        { id: 1, sno: 1, date: '17-Aug-2026', invoiceNo: '7009862278', vendor: 'IOCL', description: 'HSD Supply', amount: 1407088 },
        { id: 2, sno: 2, date: '11-Aug-2026', invoiceNo: '7009717836', vendor: 'IOCL', description: 'MS Supply', amount: 2029404 },
        { id: 3, sno: 3, date: '06-Aug-2026', invoiceNo: '7009556321', vendor: 'IOCL', description: 'HSD Supply', amount: 1407088 },
        { id: 4, sno: 4, date: '04-Aug-2026', invoiceNo: '7009486058', vendor: 'IOCL', description: 'MS Supply', amount: 1440825 },
        { id: 5, sno: 5, date: '29-Jul-2026', invoiceNo: '7009261290', vendor: 'IOCL', description: 'HSD Supply', amount: 1538921 },
      ],
    },
  },

  'inv-lube': {
    title: 'Lubricant Invoice',
    form: {
      title: 'Invoice Entry',
      fields: [
        { name: 'date', label: 'Invoice Date', type: 'date' },
        { name: 'invoiceNo', label: 'Invoice No', type: 'text', required: true },
        { name: 'vendor', label: 'Vendor', type: 'select', options: VENDORS, required: true },
        { name: 'product', label: 'Product', type: 'select', options: LUBES },
        { name: 'amount', label: 'Amount', type: 'number' },
      ],
      submitLabel: 'Save Invoice',
    },
    table: {
      minWidth: 640,
      columns: [
        { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' },
        { key: 'invoiceNo', label: 'Invoice No' }, { key: 'vendor', label: 'Vendor' },
        { key: 'product', label: 'Product' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
      ],
      rows: [
        { id: 1, sno: 1, date: '18-Aug-2026', invoiceNo: 'CL-4471', vendor: 'Castrol Distributor', product: 'Engine Oil 15W40', amount: 48200 },
        { id: 2, sno: 2, date: '02-Aug-2026', invoiceNo: 'CL-4460', vendor: 'Castrol Distributor', product: '2T Oil Sachets', amount: 12600 },
      ],
    },
  },

  // ---------------- Vendor Transaction ----------------
  vendor: {
    title: 'Vendor Transactions',
    form: {
      title: 'Vendor Transactions',
      fields: [
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'vendor', label: 'Vendor', type: 'select', options: VENDORS, required: true },
        { name: 'type', label: 'Type', type: 'radio', options: ['Credit', 'Debit'] },
        { name: 'bank', label: 'Bank', type: 'select', options: BANKS },
        { name: 'amount', label: 'Amount', type: 'number', required: true },
        { name: 'description', label: 'Description', type: 'text' },
      ],
      submitLabel: 'Save',
    },
    filters: [dateFrom, dateTo, { name: 'vendor', label: 'Vendor', type: 'select', options: VENDORS }],
    table: {
      minWidth: 680,
      columns: [
        { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'vendor', label: 'Vendor', sortable: true },
        { key: 'credit', label: 'Credit (₹)', align: 'right', format: 'crdr' },
        { key: 'debit', label: 'Debit (₹)', align: 'right', format: 'crdr' },
        { key: 'by', label: 'By' },
      ],
      rows: [
        { id: 1, sno: 1, date: '17-Aug-2026', vendor: 'IOCL', credit: 1407088, by: 'LIQUIDS' },
        { id: 2, sno: 2, date: '11-Aug-2026', vendor: 'IOCL', credit: 2029404, by: 'LIQUIDS' },
        { id: 3, sno: 3, date: '06-Aug-2026', vendor: 'IOCL', credit: 1407088, by: 'LIQUIDS' },
        { id: 4, sno: 4, date: '04-Aug-2026', vendor: 'IOCL', credit: 1440825, by: 'LIQUIDS' },
        { id: 5, sno: 5, date: '20-Jul-2026', vendor: 'D WATER', debit: 1230, by: 'LUBS' },
        { id: 6, sno: 6, date: '20-Jul-2026', vendor: 'D WATER', credit: 1230, by: 'LUBS' },
      ],
    },
  },

  // ---------------- Statement Generation ----------------
  statement: {
    title: 'Bill Generation',
    form: {
      title: 'Generation',
      fields: [
        { name: 'fromDate', label: 'From Date', type: 'date' },
        { name: 'toDate', label: 'To Date', type: 'date' },
        { name: 'organization', label: 'Organization', type: 'select', options: ORGS },
      ],
      submitLabel: 'Generate',
    },
    table: {
      exports: ['Copy', 'CSV', 'PDF', 'Print'],
      minWidth: 760,
      columns: [
        { key: 'stNo', label: 'ST No.', sortable: true }, { key: 'statementDate', label: 'Statement Date' },
        { key: 'organization', label: 'Organization' }, { key: 'period', label: 'From – To Date' },
        { key: 'billAmount', label: 'Bill Amount', align: 'right', format: 'inr' },
      ],
      rows: [
        { id: 1, stNo: '000132', statementDate: '01-08-2026', organization: 'SHRISHTI VIDYASHRAM HR SEC SCHOOL', period: '16-07-2026 – 31-08-2026', billAmount: 502234 },
        { id: 2, stNo: '000131', statementDate: '26-05-2026', organization: 'ARUN PRASATH', period: '01-05-2026 – 26-05-2026', billAmount: 331480 },
        { id: 3, stNo: '000130', statementDate: '30-04-2026', organization: 'SAT SHANMUGAM LAKSHMIPURAM', period: '19-11-2025 – 30-04-2026', billAmount: 175420 },
        { id: 4, stNo: '000129', statementDate: '24-04-2026', organization: 'A S Gurusamy', period: '11-04-2026 – 24-04-2026', billAmount: 92660 },
        { id: 5, stNo: '000128', statementDate: '11-04-2026', organization: 'VRG CEMENT MARKATING', period: '01-03-2026 – 31-03-2026', billAmount: 605130 },
      ],
    },
  },

  // ---------------- Day Business ----------------
  'db-assign': {
    title: 'Day Assignings',
    form: { title: 'Assign Nozzle', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'employee', label: 'Employee', type: 'select', options: EMPLOYEES, required: true },
      { name: 'nozzle', label: 'Nozzle', type: 'select', options: ['MPD-1', 'MPD-2', 'MPD-3', 'MPD-4'] },
      { name: 'shift', label: 'Shift', type: 'select', options: ['Morning', 'Evening'] },
      { name: 'opening', label: 'Opening Reading', type: 'number' },
    ], submitLabel: 'Assign' },
    table: { minWidth: 600, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'employee', label: 'Employee' }, { key: 'nozzle', label: 'Nozzle' },
      { key: 'shift', label: 'Shift' }, { key: 'opening', label: 'Opening', align: 'right', format: 'number' },
    ], rows: [
      { id: 1, sno: 1, employee: 'Kumar', nozzle: 'MPD-1', shift: 'Morning', opening: 128450 },
      { id: 2, sno: 2, employee: 'Suresh', nozzle: 'MPD-3', shift: 'Morning', opening: 98120 },
      { id: 3, sno: 3, employee: 'Anbu', nozzle: 'MPD-2', shift: 'Evening', opening: 76540 },
    ] },
  },

  'db-rate': {
    title: 'Daily Sale Rate',
    form: { title: 'Set Rate', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'product', label: 'Product', type: 'select', options: PRODUCTS, required: true },
      { name: 'rate', label: 'Rate (₹)', type: 'number', required: true },
    ], submitLabel: 'Save Rate' },
    table: { minWidth: 480, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'product', label: 'Product' },
      { key: 'rate', label: 'Rate', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', product: 'Petrol (MS)', rate: 102.6 },
      { id: 2, sno: 2, date: '22-May-2025', product: 'Diesel (HSD)', rate: 91.1 },
    ] },
  },

  'db-credit': {
    title: 'Credit Sale',
    form: { title: 'Credit Sale Entry', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'customer', label: 'Customer', type: 'select', options: CUSTOMERS, required: true },
      { name: 'product', label: 'Product', type: 'select', options: PRODUCTS },
      { name: 'qty', label: 'Qty (Ltr)', type: 'number' },
      { name: 'rate', label: 'Rate', type: 'number' },
      { name: 'amount', label: 'Amount', type: 'number', required: true },
    ], submitLabel: 'Save Sale' },
    filters: [dateFrom, dateTo, { name: 'customer', label: 'Customer', type: 'select', options: CUSTOMERS }],
    table: { minWidth: 640, initialSort: { key: 'amount', dir: 'desc' }, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'customer', label: 'Customer', sortable: true },
      { key: 'product', label: 'Product' }, { key: 'qty', label: 'Qty', align: 'right', format: 'number' },
      { key: 'amount', label: 'Amount', align: 'right', sortable: true, format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', customer: 'Raman Stores', product: 'Diesel (HSD)', qty: 320, amount: 29152 },
      { id: 2, sno: 2, date: '22-May-2025', customer: 'Sri Balaji Traders', product: 'Diesel (HSD)', qty: 210, amount: 19131 },
      { id: 3, sno: 3, date: '22-May-2025', customer: 'Kaveri Enterprises', product: 'Diesel (HSD)', qty: 150, amount: 13665 },
    ] },
  },

  'db-expenses': {
    title: 'Expenses',
    form: { title: 'Add Expense', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'head', label: 'Expense Head', type: 'select', options: ['Salary', 'Electricity', 'Maintenance', 'Fuel Testing', 'Stationery', 'Misc'], required: true },
      { name: 'paidTo', label: 'Paid To', type: 'text' },
      { name: 'amount', label: 'Amount', type: 'number', required: true },
      { name: 'description', label: 'Description', type: 'text', colSpan: 2 },
    ], submitLabel: 'Save Expense' },
    filters: [dateFrom, dateTo],
    table: { minWidth: 560, initialSort: { key: 'amount', dir: 'desc' }, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'head', label: 'Head' },
      { key: 'paidTo', label: 'Paid To' }, { key: 'amount', label: 'Amount', align: 'right', sortable: true, format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', head: 'Salary', paidTo: 'Staff', amount: 96000 },
      { id: 2, sno: 2, date: '21-May-2025', head: 'Electricity', paidTo: 'TNEB', amount: 18600 },
      { id: 3, sno: 3, date: '20-May-2025', head: 'Maintenance', paidTo: 'Pump Service', amount: 7400 },
    ] },
  },

  'db-lubricants': {
    title: 'Lubricants Sale',
    form: { title: 'Lubricant Sale', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'product', label: 'Product', type: 'select', options: LUBES, required: true },
      { name: 'qty', label: 'Qty', type: 'number' },
      { name: 'rate', label: 'Rate', type: 'number' },
      { name: 'amount', label: 'Amount', type: 'number' },
    ], submitLabel: 'Save' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'product', label: 'Product' },
      { key: 'qty', label: 'Qty', align: 'right', format: 'number' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', product: 'Engine Oil 15W40', qty: 2, amount: 960 },
    ] },
  },

  'db-swipe': {
    title: 'Swipe / Card Settlement',
    form: { title: 'Swipe Entry', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'bank', label: 'Bank', type: 'select', options: BANKS },
      { name: 'cardType', label: 'Card Type', type: 'select', options: ['Visa', 'Master', 'RuPay', 'UPI'] },
      { name: 'amount', label: 'Amount', type: 'number', required: true },
    ], submitLabel: 'Save' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'bank', label: 'Bank' },
      { key: 'cardType', label: 'Card Type' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', bank: 'ICICI Bank', cardType: 'UPI', amount: 184500 },
    ] },
  },

  'db-recovery': {
    title: 'Recovery',
    form: { title: 'Recovery Entry', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'customer', label: 'Customer', type: 'select', options: CUSTOMERS, required: true },
      { name: 'mode', label: 'Mode', type: 'select', options: ['Cash', 'Bank', 'UPI', 'Cheque'] },
      { name: 'amount', label: 'Amount', type: 'number', required: true },
    ], submitLabel: 'Save' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'customer', label: 'Customer' },
      { key: 'mode', label: 'Mode' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '21-May-2025', customer: 'Raman Stores', mode: 'Bank', amount: 120000 },
      { id: 2, sno: 2, date: '19-May-2025', customer: 'Kaveri Enterprises', mode: 'UPI', amount: 85000 },
    ] },
  },

  'db-emp-recovery': {
    title: 'Employee Cash Recovery',
    form: { title: 'Emp Cash Recovery', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'employee', label: 'Employee', type: 'select', options: EMPLOYEES, required: true },
      { name: 'amount', label: 'Amount', type: 'number', required: true },
    ], submitLabel: 'Save' },
    table: { minWidth: 460, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'employee', label: 'Employee' },
      { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', employee: 'Kumar', amount: 2300 },
    ] },
  },

  'db-opening': {
    title: 'Day Opening Stock',
    form: { title: 'Opening Stock Entry', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'product', label: 'Product', type: 'select', options: PRODUCTS, required: true },
      { name: 'qty', label: 'Qty (Ltr)', type: 'number', required: true },
      { name: 'amount', label: 'Amount', type: 'number' },
    ], submitLabel: 'Save' },
    table: { minWidth: 480, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'product', label: 'Product' },
      { key: 'qty', label: 'Qty', align: 'right', format: 'number' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, product: 'Petrol (MS)', qty: 2600.16, amount: 283157.44 },
      { id: 2, sno: 2, product: 'Diesel (HSD)', qty: 3927.66, amount: 395476.08 },
    ] },
  },

  'db-settlement': {
    title: 'Day Settlement',
    blurb: 'End-of-day cash, sales and credit reconciliation.',
    table: { minWidth: 480, exports: ['PDF', 'Print'], columns: [
      { key: 'sno', label: 'S.No' }, { key: 'head', label: 'Head' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, head: 'Fuel Sale', amount: 678633.52 },
      { id: 2, sno: 2, head: 'Card / UPI', amount: 184500 },
      { id: 3, sno: 3, head: 'Credit Sale', amount: 61948 },
      { id: 4, sno: 4, head: 'Expenses', amount: 112350 },
      { id: 5, sno: 5, head: 'Cash In Hand', amount: 462350 },
    ] },
  },

  // ---------------- Product Stock ----------------
  'ps-lubloss': {
    title: 'Lub Loss',
    form: { title: 'Record Loss', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'product', label: 'Product', type: 'select', options: LUBES, required: true },
      { name: 'lossQty', label: 'Loss Qty', type: 'number', required: true },
      { name: 'reason', label: 'Reason', type: 'text', colSpan: 2 },
    ], submitLabel: 'Save' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'product', label: 'Product' },
      { key: 'lossQty', label: 'Loss Qty', align: 'right', format: 'number' }, { key: 'reason', label: 'Reason' },
    ], rows: [
      { id: 1, sno: 1, date: '20-May-2025', product: 'Engine Oil 15W40', lossQty: 2, reason: 'Spillage' },
    ] },
  },

  'ps-lubstock': {
    title: 'Lubs Stock',
    table: { minWidth: 560, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'product', label: 'Product' },
      { key: 'opening', label: 'Opening', align: 'right', format: 'number' },
      { key: 'sales', label: 'Sales', align: 'right', format: 'number' },
      { key: 'closing', label: 'Closing', align: 'right', format: 'number' },
    ], rows: [
      { id: 1, sno: 1, product: 'Engine Oil 15W40', opening: 48, sales: 40, closing: 8 },
      { id: 2, sno: 2, product: 'Coolant', opening: 30, sales: 6, closing: 24 },
      { id: 3, sno: 3, product: '2T Oil Sachets', opening: 310, sales: 45, closing: 265 },
    ] },
  },

  'ps-minimum': {
    title: 'Minimum Stock',
    blurb: 'Items at or below their reorder level.',
    table: { minWidth: 560, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'product', label: 'Product' },
      { key: 'closing', label: 'Closing', align: 'right', format: 'number' },
      { key: 'minimum', label: 'Minimum', align: 'right', format: 'number' },
      { key: 'status', label: 'Status', format: 'badge', tone: () => 'negative' },
    ], rows: [
      { id: 1, sno: 1, product: 'Engine Oil 15W40', closing: 8, minimum: 20, status: 'Reorder' },
      { id: 2, sno: 2, product: 'Diesel Tank', closing: 18200, minimum: 20000, status: 'Reorder' },
      { id: 3, sno: 3, product: 'Coolant', closing: 24, minimum: 30, status: 'Reorder' },
    ] },
  },

  // ---------------- Others ----------------
  shift: {
    title: 'Shift Sheet Entry',
    form: { title: 'Shift Sheet', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'shift', label: 'Shift', type: 'select', options: ['Morning', 'Evening'] },
      { name: 'nozzle', label: 'Nozzle', type: 'select', options: ['MPD-1', 'MPD-2', 'MPD-3', 'MPD-4'] },
      { name: 'opening', label: 'Opening', type: 'number' },
      { name: 'closing', label: 'Closing', type: 'number' },
      { name: 'testing', label: 'Testing (Ltr)', type: 'number' },
    ], submitLabel: 'Save' },
    table: { minWidth: 600, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'nozzle', label: 'Nozzle' }, { key: 'shift', label: 'Shift' },
      { key: 'opening', label: 'Opening', align: 'right', format: 'number' },
      { key: 'closing', label: 'Closing', align: 'right', format: 'number' },
      { key: 'sale', label: 'Sale (Ltr)', align: 'right', format: 'number' },
    ], rows: [
      { id: 1, sno: 1, nozzle: 'MPD-1', shift: 'Morning', opening: 128450, closing: 130070, sale: 1620 },
      { id: 2, sno: 2, nozzle: 'MPD-3', shift: 'Morning', opening: 98120, closing: 99830, sale: 1710 },
    ] },
  },

  buscr: {
    title: 'Business Cr / Dr Transactions',
    form: { title: 'Cr / Dr Entry', fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'party', label: 'Party', type: 'text', required: true },
      { name: 'type', label: 'Type', type: 'radio', options: ['Credit', 'Debit'] },
      { name: 'bank', label: 'Bank', type: 'select', options: BANKS },
      { name: 'amount', label: 'Amount', type: 'number', required: true },
      { name: 'description', label: 'Description', type: 'text', colSpan: 2 },
    ], submitLabel: 'Save' },
    filters: [dateFrom, dateTo],
    table: { minWidth: 620, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'date', label: 'Date' }, { key: 'party', label: 'Party' },
      { key: 'credit', label: 'Credit (₹)', align: 'right', format: 'crdr' },
      { key: 'debit', label: 'Debit (₹)', align: 'right', format: 'crdr' },
    ], rows: [
      { id: 1, sno: 1, date: '22-May-2025', party: 'Owner Drawings', debit: 50000 },
      { id: 2, sno: 2, date: '21-May-2025', party: 'Capital Infusion', credit: 200000 },
    ] },
  },

  'gen-invoice': {
    title: 'Generate Sale Invoice',
    form: { title: 'Generate Invoice', fields: [
      { name: 'customer', label: 'Customer', type: 'select', options: CUSTOMERS, required: true },
      { name: 'fromDate', label: 'From Date', type: 'date' },
      { name: 'toDate', label: 'To Date', type: 'date' },
    ], submitLabel: 'Generate' },
    table: { minWidth: 560, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'invoiceNo', label: 'Invoice No' }, { key: 'date', label: 'Date' },
      { key: 'customer', label: 'Customer' }, { key: 'amount', label: 'Amount', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, invoiceNo: 'SI-1042', date: '22-May-2025', customer: 'Raman Stores', amount: 275000 },
    ] },
  },

  generated: {
    title: 'Generated Invoices',
    filters: [dateFrom, dateTo, { name: 'customer', label: 'Customer', type: 'select', options: CUSTOMERS }],
    table: { minWidth: 620, exports: ['CSV', 'PDF', 'Print'], initialSort: { key: 'date', dir: 'desc' }, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'invoiceNo', label: 'Invoice No', sortable: true }, { key: 'date', label: 'Date' },
      { key: 'customer', label: 'Customer' }, { key: 'amount', label: 'Amount', align: 'right', sortable: true, format: 'inr' },
      { key: 'status', label: 'Status', format: 'badge', tone: (r) => (r.status === 'Paid' ? 'positive' : 'warn') },
    ], rows: [
      { id: 1, sno: 1, invoiceNo: 'SI-1042', date: '22-May-2025', customer: 'Raman Stores', amount: 275000, status: 'Unpaid' },
      { id: 2, sno: 2, invoiceNo: 'SI-1041', date: '20-May-2025', customer: 'Sri Balaji Traders', amount: 225000, status: 'Paid' },
      { id: 3, sno: 3, invoiceNo: 'SI-1040', date: '18-May-2025', customer: 'A S Gurusamy', amount: 139149, status: 'Paid' },
    ] },
  },

  // ---------------- Master ----------------
  'm-fuel-products': {
    title: 'Fuel Products',
    form: { title: 'Add Fuel Product', fields: [
      { name: 'name', label: 'Product Name', type: 'text', required: true },
      { name: 'hsn', label: 'HSN Code', type: 'text' },
      { name: 'unit', label: 'Unit', type: 'select', options: ['Ltr'] },
      { name: 'rate', label: 'Rate', type: 'number' },
    ], submitLabel: 'Save Product' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Product', sortable: true }, { key: 'hsn', label: 'HSN' },
      { key: 'unit', label: 'Unit' }, { key: 'rate', label: 'Rate', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, name: 'Petrol (MS)', hsn: '27101290', unit: 'Ltr', rate: 102.6 },
      { id: 2, sno: 2, name: 'Diesel (HSD)', hsn: '27101930', unit: 'Ltr', rate: 91.1 },
      { id: 3, sno: 3, name: 'Power / XP95', hsn: '27101290', unit: 'Ltr', rate: 108.4 },
    ] },
  },

  'm-lubricants': {
    title: 'Lubricants',
    form: { title: 'Add Lubricant', fields: [
      { name: 'name', label: 'Lubricant Name', type: 'text', required: true },
      { name: 'brand', label: 'Brand', type: 'select', options: ['Castrol', 'Servo', 'Shell', 'HP'] },
      { name: 'unit', label: 'Unit', type: 'select', options: ['Ltr', 'Nos'] },
      { name: 'rate', label: 'Rate', type: 'number' },
    ], submitLabel: 'Save Lubricant' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Lubricant', sortable: true }, { key: 'brand', label: 'Brand' },
      { key: 'unit', label: 'Unit' }, { key: 'rate', label: 'Rate', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, name: 'Engine Oil 15W40', brand: 'Castrol', unit: 'Ltr', rate: 480 },
      { id: 2, sno: 2, name: 'Coolant', brand: 'Shell', unit: 'Ltr', rate: 260 },
      { id: 3, sno: 3, name: '2T Oil Sachet', brand: 'Servo', unit: 'Nos', rate: 55 },
    ] },
  },

  'm-credit-customer': {
    title: 'Credit Customer',
    form: { title: 'Add Credit Customer', fields: [
      { name: 'name', label: 'Customer Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile', type: 'text' },
      { name: 'creditLimit', label: 'Credit Limit', type: 'number' },
      { name: 'gstin', label: 'GSTIN', type: 'text' },
      { name: 'opening', label: 'Opening Balance', type: 'number' },
    ], submitLabel: 'Save Customer' },
    table: { minWidth: 600, initialSort: { key: 'creditLimit', dir: 'desc' }, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Customer', sortable: true }, { key: 'mobile', label: 'Mobile' },
      { key: 'creditLimit', label: 'Credit Limit', align: 'right', sortable: true, format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, name: 'Sri Balaji Traders', mobile: '9876543210', creditLimit: 500000 },
      { id: 2, sno: 2, name: 'Kaveri Enterprises', mobile: '8765432109', creditLimit: 300000 },
      { id: 3, sno: 3, name: 'Raman Stores', mobile: '7654321098', creditLimit: 250000 },
      { id: 4, sno: 4, name: 'A S Gurusamy', mobile: '7540070023', creditLimit: 200000 },
    ] },
  },

  'm-employees': {
    title: 'Employees',
    form: { title: 'Add Employee', fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'role', label: 'Role', type: 'select', options: ['Attendant', 'Cashier', 'Manager', 'Supervisor'] },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'salary', label: 'Salary', type: 'number' },
    ], submitLabel: 'Save Employee' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Name' }, { key: 'role', label: 'Role' },
      { key: 'phone', label: 'Phone' }, { key: 'salary', label: 'Salary', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, name: 'Kumar', role: 'Attendant', phone: '9791000001', salary: 18000 },
      { id: 2, sno: 2, name: 'Suresh', role: 'Cashier', phone: '9791000002', salary: 22000 },
    ] },
  },

  'm-expense-types': {
    title: 'Expense Types',
    form: { title: 'Add Expense Type', fields: [
      { name: 'name', label: 'Expense Head', type: 'text', required: true },
    ], submitLabel: 'Save' },
    table: { minWidth: 360, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Expense Head' },
    ], rows: [
      { id: 1, sno: 1, name: 'Salary' }, { id: 2, sno: 2, name: 'Electricity' },
      { id: 3, sno: 3, name: 'Maintenance' }, { id: 4, sno: 4, name: 'Fuel Testing' },
      { id: 5, sno: 5, name: 'Stationery' }, { id: 6, sno: 6, name: 'Miscellaneous' },
    ] },
  },

  'm-crdr-party': {
    title: 'Business Crd / Debit Party',
    form: { title: 'Add Party', fields: [
      { name: 'name', label: 'Party Name', type: 'text', required: true },
      { name: 'type', label: 'Type', type: 'radio', options: ['Credit', 'Debit'] },
      { name: 'opening', label: 'Opening Balance', type: 'number' },
    ], submitLabel: 'Save' },
    table: { minWidth: 420, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Party' }, { key: 'type', label: 'Type' },
    ], rows: [
      { id: 1, sno: 1, name: 'Owner Drawings', type: 'Debit' },
      { id: 2, sno: 2, name: 'Capital Account', type: 'Credit' },
    ] },
  },

  'm-vendor': {
    title: 'Vendor',
    form: { title: 'Add Vendor', fields: [
      { name: 'name', label: 'Vendor Name', type: 'text', required: true },
      { name: 'gstin', label: 'GSTIN', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'opening', label: 'Opening Balance', type: 'number' },
    ], submitLabel: 'Save Vendor' },
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Vendor', sortable: true }, { key: 'gstin', label: 'GSTIN' }, { key: 'phone', label: 'Phone' },
    ], rows: [
      { id: 1, sno: 1, name: 'IOCL', gstin: '33AAACI1681G1Z', phone: '18002333555' },
      { id: 2, sno: 2, name: 'Castrol Distributor', gstin: '33AACCC1234F1Z', phone: '9840012345' },
      { id: 3, sno: 3, name: 'D WATER', gstin: '33AAAFD9876H1Z', phone: '9840099887' },
    ] },
  },

  'm-swipe-machines': {
    title: 'Swipe Machines',
    form: { title: 'Add Swipe Machine', fields: [
      { name: 'name', label: 'Machine Name', type: 'text', required: true },
      { name: 'bank', label: 'Bank', type: 'select', options: ['ICICI Bank', 'Indian Bank'] },
      { name: 'tid', label: 'Terminal ID', type: 'text' },
    ], submitLabel: 'Save' },
    table: { minWidth: 460, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Machine' }, { key: 'bank', label: 'Bank' }, { key: 'tid', label: 'Terminal ID' },
    ], rows: [
      { id: 1, sno: 1, name: 'POS-Counter 1', bank: 'ICICI Bank', tid: 'ICI2201' },
      { id: 2, sno: 2, name: 'POS-Counter 2', bank: 'Indian Bank', tid: 'IB4487' },
    ] },
  },

  'm-expiry-items': {
    title: 'Expiry Items',
    blurb: 'Lubricants and consumables nearing expiry.',
    table: { minWidth: 520, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Item' }, { key: 'batch', label: 'Batch' },
      { key: 'qty', label: 'Qty', align: 'right', format: 'number' }, { key: 'expiry', label: 'Expiry' },
    ], rows: [
      { id: 1, sno: 1, name: 'Coolant', batch: 'CL-2207', qty: 6, expiry: 'Sep 2026' },
      { id: 2, sno: 2, name: '2T Oil Sachet', batch: 'ST-1190', qty: 40, expiry: 'Nov 2026' },
    ] },
  },

  'm-tank-nozzle': {
    title: 'Tank & Nozzel',
    form: { title: 'Add Tank / Nozzle', fields: [
      { name: 'name', label: 'Nozzle', type: 'text', required: true },
      { name: 'product', label: 'Product', type: 'select', options: ['Petrol (MS)', 'Diesel (HSD)'] },
      { name: 'tank', label: 'Tank', type: 'select', options: ['Petrol Tank', 'Diesel Tank'] },
      { name: 'capacity', label: 'Tank Capacity (Ltr)', type: 'number' },
    ], submitLabel: 'Save' },
    table: { minWidth: 560, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Nozzle' }, { key: 'product', label: 'Product' },
      { key: 'tank', label: 'Tank' }, { key: 'capacity', label: 'Capacity', align: 'right', format: 'number' },
    ], rows: [
      { id: 1, sno: 1, name: 'MPD-1', product: 'Petrol (MS)', tank: 'Petrol Tank', capacity: 30000 },
      { id: 2, sno: 2, name: 'MPD-3', product: 'Diesel (HSD)', tank: 'Diesel Tank', capacity: 40000 },
    ] },
  },

  'm-pump-setting': {
    title: 'Pump Setting',
    form: { title: 'Pump Configuration', fields: [
      { name: 'pump', label: 'Pump', type: 'select', options: ['Pump 1', 'Pump 2', 'Pump 3'] },
      { name: 'nozzles', label: 'No. of Nozzles', type: 'number' },
      { name: 'product', label: 'Default Product', type: 'select', options: ['Petrol (MS)', 'Diesel (HSD)'] },
    ], submitLabel: 'Save Setting' },
    table: { minWidth: 460, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'pump', label: 'Pump' }, { key: 'nozzles', label: 'Nozzles', align: 'right', format: 'number' }, { key: 'product', label: 'Product' },
    ], rows: [
      { id: 1, sno: 1, pump: 'Pump 1', nozzles: 2, product: 'Petrol (MS)' },
      { id: 2, sno: 2, pump: 'Pump 2', nozzles: 2, product: 'Diesel (HSD)' },
    ] },
  },

  'm-dutypay-shift': {
    title: 'DutyPay Shift',
    form: { title: 'Shift Configuration', fields: [
      { name: 'name', label: 'Shift Name', type: 'text', required: true },
      { name: 'from', label: 'From Time', type: 'text' },
      { name: 'to', label: 'To Time', type: 'text' },
    ], submitLabel: 'Save Shift' },
    table: { minWidth: 460, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Shift' }, { key: 'from', label: 'From' }, { key: 'to', label: 'To' },
    ], rows: [
      { id: 1, sno: 1, name: 'Morning', from: '06:00 AM', to: '02:00 PM' },
      { id: 2, sno: 2, name: 'Evening', from: '02:00 PM', to: '10:00 PM' },
    ] },
  },

  'm-print-templates': {
    title: 'Print Templates',
    table: { minWidth: 480, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Template' }, { key: 'type', label: 'Type' }, { key: 'status', label: 'Status', format: 'badge', tone: () => 'positive' },
    ], rows: [
      { id: 1, sno: 1, name: 'Sale Invoice', type: 'Invoice', status: 'Active' },
      { id: 2, sno: 2, name: 'Statement', type: 'Statement', status: 'Active' },
      { id: 3, sno: 3, name: 'Credit Bill', type: 'Bill', status: 'Active' },
    ] },
  },

  'm-guest-entry': {
    title: 'Guest Entry',
    form: { title: 'Add Guest Customer', fields: [
      { name: 'name', label: 'Guest Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile', type: 'text' },
      { name: 'vehicle', label: 'Vehicle No', type: 'text' },
    ], submitLabel: 'Save Guest' },
    table: { minWidth: 480, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'name', label: 'Guest' }, { key: 'mobile', label: 'Mobile' }, { key: 'vehicle', label: 'Vehicle No' },
    ], rows: [
      { id: 1, sno: 1, name: 'Walk-in Guest', mobile: '9000000001', vehicle: 'TN-01-AB-1234' },
    ] },
  },

  'm-denominations': {
    title: 'Denominations',
    blurb: 'Cash denomination count for day settlement.',
    form: { title: 'Denomination Count', fields: [
      { name: 'note', label: 'Note (₹)', type: 'select', options: ['500', '200', '100', '50', '20', '10', 'Coins'] },
      { name: 'count', label: 'Count', type: 'number' },
    ], submitLabel: 'Add' },
    table: { minWidth: 420, columns: [
      { key: 'sno', label: 'S.No' }, { key: 'note', label: 'Note (₹)' }, { key: 'count', label: 'Count', align: 'right', format: 'number' },
      { key: 'total', label: 'Total', align: 'right', format: 'inr' },
    ], rows: [
      { id: 1, sno: 1, note: '500', count: 620, total: 310000 },
      { id: 2, sno: 2, note: '200', count: 210, total: 42000 },
      { id: 3, sno: 3, note: '100', count: 480, total: 48000 },
      { id: 4, sno: 4, note: '50', count: 120, total: 6000 },
    ] },
  },
}
