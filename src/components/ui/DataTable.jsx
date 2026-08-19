import { useMemo, useState } from 'react'
import { Icon } from './Icon'

// Generic sortable table.
// columns: [{ key, label, align?, sortable?, render?(row) }]
export function DataTable({ columns, rows, initialSort, minWidth = 720, rowKey = 'id' }) {
  const [sort, setSort] = useState(initialSort || null)

  const sorted = useMemo(() => {
    if (!sort) return rows
    const col = columns.find((c) => c.key === sort.key)
    if (!col) return rows
    const dir = sort.dir === 'asc' ? 1 : -1
    return [...rows].sort((a, b) => {
      const av = col.sortValue ? col.sortValue(a) : a[sort.key]
      const bv = col.sortValue ? col.sortValue(b) : b[sort.key]
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir
      return String(av).localeCompare(String(bv)) * dir
    })
  }, [rows, sort, columns])

  const toggle = (key) =>
    setSort((s) =>
      s?.key === key
        ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' }
        : { key, dir: 'desc' },
    )

  return (
    <div className="-mx-1 overflow-x-auto">
      <table className="w-full border-collapse text-sm" style={{ minWidth }}>
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wide text-muted">
            {columns.map((c) => (
              <th
                key={c.key}
                className={`px-3 py-2.5 font-semibold ${c.align === 'right' ? 'text-right' : ''}`}
              >
                {c.sortable ? (
                  <button
                    onClick={() => toggle(c.key)}
                    className={`inline-flex items-center gap-1 hover:text-ink ${
                      c.align === 'right' ? 'flex-row-reverse' : ''
                    } ${sort?.key === c.key ? 'text-ink' : ''}`}
                    aria-sort={sort?.key === c.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}
                  >
                    {c.label}
                    <Icon
                      name="ChevronRight"
                      className={`h-3 w-3 transition-transform ${
                        sort?.key === c.key
                          ? sort.dir === 'asc' ? '-rotate-90' : 'rotate-90'
                          : 'rotate-90 opacity-30'
                      }`}
                    />
                  </button>
                ) : (
                  c.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row[rowKey]} className="border-t border-border hover:bg-surface-2/50">
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={`px-3 py-2.5 ${c.align === 'right' ? 'text-right tnum' : ''} ${c.cellClass || ''}`}
                >
                  {c.render ? c.render(row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-3 py-10 text-center text-sm text-muted">
                No records match your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
