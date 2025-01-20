import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Button, HeaderContent, Summary } from './styles'
import { ButtonHTMLAttributes } from 'react'

dayjs.extend(relativeTime)

interface PostCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  summary: string
  createdAt: string
}

export function PostCard({
  title,
  summary,
  createdAt,
  ...props
}: PostCardProps) {
  return (
    <Button {...props}>
      <HeaderContent>
        <h3>{title}</h3>
        <span>{dayjs(createdAt).fromNow()}</span>
      </HeaderContent>
      <Summary>{summary}</Summary>
    </Button>
  )
}
