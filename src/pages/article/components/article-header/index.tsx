import { LinkButton } from '@/components/ui'
import {
  FaChevronLeft,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'
import {
  Container,
  Content,
  LinkGroup,
  SocialMediaGroup,
  SocialMedia,
} from './styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Post } from '@/services/get-post'
import { compactNumberFormatter, formatDateRelative } from '@/utils/formatters'

interface ArticleHeader {
  data: Omit<Post, 'body'>
}

export function ArticleHeader({ data }: ArticleHeader) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const searchTerm = searchParams.get('q') || ''

  const handleBack = () => {
    navigate(`/?q=${searchTerm}`)
  }

  return (
    <Container>
      <Content>
        <LinkGroup>
          <LinkButton onClick={handleBack}>
            <FaChevronLeft size={18} />
            BACK
          </LinkButton>
          <LinkButton target="_blank" href={data.githubUrl}>
            GO TO GITHUB <TbExternalLink size={18} />
          </LinkButton>
        </LinkGroup>

        <h1>{data.title}</h1>

        <SocialMediaGroup>
          <SocialMedia>
            <FaGithub size={18} />
            <span>{data.username}</span>
          </SocialMedia>

          <SocialMedia>
            <FaCalendarDay size={18} />
            <span>{formatDateRelative(data.createdAt)}</span>
          </SocialMedia>

          <SocialMedia>
            <FaComment size={18} />
            <span>{compactNumberFormatter(data.comments)} comments</span>
          </SocialMedia>
        </SocialMediaGroup>
      </Content>
    </Container>
  )
}
