import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function formatDateRelative(date: string | Date) {
  return dayjs(date).fromNow()
}

export function compactNumberFormatter(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value)
}
