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
import { getProfile, GitHubUser } from '@/services/get-profile'
import { useQuery } from '@tanstack/react-query'

export default function Profile() {
  const { data } = useQuery<GitHubUser, Error>({
    queryKey: ['githubProfile'],
    queryFn: () => getProfile(),
    staleTime: 5 * 1000, // Fresh data for 5 minutes
    retry: 2,
  })

  return (
    <Container>
      <Content>
        {data && (
          <>
            <LinkButton href={data.html_url}>GITHUB</LinkButton>
            <Picture src={data.avatar_url} />

            <Description>
              <h3>{data.name}</h3>
              <p>{data.bio ?? `...`}</p>

              <Spacing apparence="s" />

              <SocialMediaGroup>
                <SocialMedia>
                  <FaGithub size={18} />
                  {data.login}
                </SocialMedia>

                {data.company && (
                  <SocialMedia>
                    <FaBuilding size={18} />
                    {data.company}
                  </SocialMedia>
                )}

                <SocialMedia>
                  <FaUserFriends size={18} />
                  {data.followers} Followers
                </SocialMedia>
              </SocialMediaGroup>
            </Description>
          </>
        )}
      </Content>
    </Container>
  )
}
