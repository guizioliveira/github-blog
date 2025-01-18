export function compactNumberFormatter(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value)
}
