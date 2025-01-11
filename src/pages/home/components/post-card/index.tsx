import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Container, HeaderContent, Summary } from './styles'

dayjs.extend(relativeTime)

interface PostCardProps {
  title: string
  summary: string
  createdAt: string
}

export default function PostCard({ title, summary, createdAt }: PostCardProps) {
  const truncateText = (text: string) => text.substring(0, 181) + '...'

  return (
    <Container>
      <HeaderContent>
        <h3>{title}</h3>
        <span>{dayjs(createdAt).fromNow()}</span>
      </HeaderContent>
      <Summary>{truncateText(summary)}</Summary>
    </Container>
  )
}
