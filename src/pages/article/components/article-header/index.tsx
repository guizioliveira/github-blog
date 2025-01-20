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
import { useNavigate } from 'react-router-dom'

export function ArticleHeader() {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <LinkGroup>
          <LinkButton onClick={() => navigate('/')}>
            <FaChevronLeft size={18} />
            BACK
          </LinkButton>
          <LinkButton target="_blank">
            GO TO GITHUB <TbExternalLink size={18} />
          </LinkButton>
        </LinkGroup>

        <h1>
          Expose refs on DOM Components as Direct Handles to the actual DOM Node
        </h1>

        <SocialMediaGroup>
          <SocialMedia>
            <FaGithub size={18} />
            <span>guizioliveira</span>
          </SocialMedia>

          <SocialMedia>
            <FaCalendarDay size={18} />
            <span>2 weeks ago</span>
          </SocialMedia>

          <SocialMedia>
            <FaComment size={18} />
            <span>5 comments</span>
          </SocialMedia>
        </SocialMediaGroup>
      </Content>
    </Container>
  )
}
