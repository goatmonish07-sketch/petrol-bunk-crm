// CSV export. Builds a CSV from column defs + row objects and triggers a download.
// Works in a normal browser (e.g. the Cloudflare-hosted site).

function escapeCell(value) {
  if (value == null) return ''
  const s = String(value)
  // Quote if it contains comma, quote, or newline.
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

/**
 * @param {string} filename  base name (without extension)
 * @param {{key:string,label:string}[]} columns
 * @param {object[]} rows
 * @param {(col,row)=>any} [cellValue]  optional custom value extractor
 */
export function downloadCSV(filename, columns, rows, cellValue) {
  const header = columns.map((c) => escapeCell(c.label)).join(',')
  const lines = rows.map((row) =>
    columns
      .map((c) => escapeCell(cellValue ? cellValue(c, row) : row[c.key]))
      .join(','),
  )
  const csv = [header, ...lines].join('\n')

  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.csv`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

// Copy the table to the clipboard as TSV (pastes cleanly into Excel/Sheets).
function copyTable(columns, rows) {
  const tsv = [
    columns.map((c) => c.label).join('\t'),
    ...rows.map((r) => columns.map((c) => (r[c.key] == null ? '' : r[c.key])).join('\t')),
  ].join('\n')
  navigator.clipboard?.writeText(tsv)
}

// One handler for every export button: CSV downloads, Copy copies TSV,
// PDF/Print open the browser print dialog (Save as PDF).
export function onExport(kind, title, columns, rows) {
  switch (kind) {
    case 'CSV':
      downloadCSV(title, columns, rows)
      break
    case 'Copy':
      copyTable(columns, rows)
      break
    case 'PDF':
    case 'Print':
      window.print()
      break
    default:
      break
  }
}
