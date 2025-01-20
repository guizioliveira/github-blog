import { Post, getPost } from '@/services/get-post'
import { useQuery } from '@tanstack/react-query'

export function usePost(id: number) {
  return useQuery<Post, Error>({
    queryKey: ['githubIssue', id],
    queryFn: () => getPost(id),
    staleTime: 5 * 60 * 1000, // Fresh data for 5 minutes
    retry: 2,
  })
}
