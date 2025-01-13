import { FaUserFriends, FaGithub, FaBuilding } from 'react-icons/fa'
import {
  Container,
  Content,
  Picture,
  SocialMediaGroup,
  SocialMedia,
  Description,
} from './styles'
import { Spacing, LinkButton } from '@/components/ui'

export default function Profile() {
  return (
    <Container>
      <Content>
        <LinkButton href="github.com/guizioliveira">GITHUB</LinkButton>
        <Picture src="https://avatars.githubusercontent.com/u/21250477?v=4" />

        <Description>
          <h3>Guilherme de Oliveira</h3>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <Spacing apparence="s" />

          <SocialMediaGroup>
            <SocialMedia>
              <FaGithub size={18} />
              guizioliveira
            </SocialMedia>

            <SocialMedia>
              <FaBuilding size={18} />
              Sicredi
            </SocialMedia>

            <SocialMedia>
              <FaUserFriends size={18} />4 Followers
            </SocialMedia>
          </SocialMediaGroup>
        </Description>
      </Content>
    </Container>
  )
}
