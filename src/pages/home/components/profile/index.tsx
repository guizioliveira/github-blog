import { FaUserFriends, FaGithub, FaBuilding } from 'react-icons/fa'
import {
  Content,
  Picture,
  SocialMediaGroup,
  SocialMedia,
  Description,
} from './styles'
import { LinkButton } from '@/components/ui'
import { getProfile, GitHubUser } from '@/services/get-profile'
import { useQuery } from '@tanstack/react-query'
import { ProfileSkeleton } from '@/components/skeletons/profile'

export function Profile() {
  const { data, isLoading } = useQuery<GitHubUser, Error>({
    queryKey: ['githubProfile'],
    queryFn: () => getProfile(),
    staleTime: 5 * 1000, // Fresh data for 5 minutes
    retry: 2,
  })

  function compactNumberOfFollowers(followers: number) {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(followers)
  }

  return (
    <>
      {isLoading && <ProfileSkeleton />}

      {data && (
        <Content>
          <LinkButton href={data.html_url}>GITHUB</LinkButton>
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
                {compactNumberOfFollowers(data.followers)} followers
              </SocialMedia>
            </SocialMediaGroup>
          </Description>
        </Content>
      )}
    </>
  )
}
