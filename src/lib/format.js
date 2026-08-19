// Indian number + currency formatting (lakh / crore grouping).

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const inrWhole = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

const num = new Intl.NumberFormat('en-IN')

/** ₹21,29,995.46 */
export function formatINR(value, { whole = false } = {}) {
  const n = Number(value) || 0
  return (whole ? inrWhole : inr).format(n)
}

/** 5,840.00 Ltr etc. — plain grouped number with fixed decimals */
export function formatNumber(value, decimals = 2) {
  const n = Number(value) || 0
  return n.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function formatInt(value) {
  return num.format(Math.round(Number(value) || 0))
}

/** Compact Indian: 21.30 Lakh / 1.24 Cr — for tight mobile tiles */
export function formatCompactINR(value) {
  const n = Number(value) || 0
  const abs = Math.abs(n)
  if (abs >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`
  if (abs >= 1e5) return `₹${(n / 1e5).toFixed(2)} Lakh`
  if (abs >= 1e3) return `₹${(n / 1e3).toFixed(1)}K`
  return formatINR(n)
}

export function formatPct(value, decimals = 1) {
  const n = Number(value) || 0
  return `${n > 0 ? '' : ''}${n.toFixed(decimals)}%`
}

export function formatLtr(value) {
  return `${formatNumber(value, 2)} Ltr`
}
