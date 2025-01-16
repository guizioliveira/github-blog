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
  return (
    <Container>
      <HeaderContent>
        <h3>{title}</h3>
        <span>{dayjs(createdAt).fromNow()}</span>
      </HeaderContent>
      <Summary>{summary}</Summary>
    </Container>
  )
}
