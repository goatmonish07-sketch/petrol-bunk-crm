// Shared constants: colors resolve from CSS vars so charts stay theme-aware.

export const cssVar = (name) =>
  `rgb(${getComputedStyle(document.documentElement).getPropertyValue(name).trim()})`

// Names of the semantic tokens (resolved at render time for charts).
export const TOKENS = {
  data: '--data',
  data2: '--data-2',
  petrol: '--petrol',
  diesel: '--diesel',
  lube: '--lube',
  positive: '--positive',
  negative: '--negative',
  warn: '--warn',
  border: '--border',
  muted: '--muted',
  brand: '--brand',
}

export const SHIFTS = [
  { id: 'day', label: 'Day Shift', window: '06:00 AM – 10:00 PM' },
  { id: 'morning', label: 'Morning Shift', window: '06:00 AM – 02:00 PM' },
  { id: 'evening', label: 'Evening Shift', window: '02:00 PM – 10:00 PM' },
]

export const RANGES = [
  { id: '7d', label: '7D' },
  { id: '30d', label: '30D' },
  { id: '12m', label: '12M' },
]
