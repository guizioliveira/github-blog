import { formatDateRelative } from '@/utils/formatters'
import { Button, HeaderContent, Summary } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface PostCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  summary: string
  createdAt: string
}

export function PostCard({
  title,
  summary,
  createdAt,
  onClick,
}: PostCardProps) {
  return (
    <Button onClick={onClick}>
      <HeaderContent>
        <h3>{title}</h3>
        <span>{formatDateRelative(createdAt)}</span>
      </HeaderContent>
      <Summary>{summary}</Summary>
    </Button>
  )
}
