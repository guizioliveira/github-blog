import { getProfile, GitHubUser } from '@/services/get-profile'
import { useQuery } from '@tanstack/react-query'

export function useGithubProfile() {
  return useQuery<GitHubUser, Error>({
    queryKey: ['githubProfile'],
    queryFn: () => getProfile(),
    staleTime: 5 * 60 * 1000, // Fresh data for 5 minutes
    retry: 2,
  })
}
