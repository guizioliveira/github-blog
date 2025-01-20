import { FaUserFriends, FaGithub, FaBuilding } from 'react-icons/fa'
import {
  Content,
  Picture,
  SocialMediaGroup,
  SocialMedia,
  Description,
  Container,
  NoUserFound,
} from './styles'
import { LinkButton } from '@/components/ui'
import { ProfileSkeleton } from '@/components/skeletons/profile'
import { compactNumberFormatter } from '@/utils/formatters'
import { useGithubProfile } from '@/hooks/useGithubProfile'
import { TbExternalLink } from 'react-icons/tb'

export function Profile() {
  const { data, isLoading } = useGithubProfile()

  return (
    <>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <Container>
          {data ? (
            <Content>
              <LinkButton href={data.html_url}>
                GITHUB <TbExternalLink size={18} />
              </LinkButton>
              <Picture src={data.avatar_url} />

              <Description>
                <h3>{data.name}</h3>
                <p>{data.bio ?? `...`}</p>

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
                    {compactNumberFormatter(data.followers)} followers
                  </SocialMedia>
                </SocialMediaGroup>
              </Description>
            </Content>
          ) : (
            <NoUserFound>The user was not found.</NoUserFound>
          )}
        </Container>
      )}
    </>
  )
}
