import { downloadCSV } from '../../lib/csv'
import { Icon } from './Icon'

// Small CSV export button for any table card.
// columns: [{ key, label }]; rows: object[]
export function ExportButton({ filename, columns, rows, label = 'CSV' }) {
  return (
    <button
      onClick={() => downloadCSV(filename, columns.map((c) => ({ key: c.key, label: c.label })), rows)}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[12px] font-semibold text-muted hover:bg-surface-2 hover:text-ink"
    >
      <Icon name="Download" className="h-3.5 w-3.5" /> {label}
    </button>
  )
}
