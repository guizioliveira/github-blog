import { useInfiniteQuery } from '@tanstack/react-query'
import { getPosts, GitHubPostReturn } from '@/services/get-list-posts'

interface UsePostsInfiniteQueryParams {
  searchTerm?: string
}

export function usePostsInfiniteQuery({
  searchTerm = '',
}: UsePostsInfiniteQueryParams) {
  return useInfiniteQuery<GitHubPostReturn>({
    queryKey: ['github-posts', searchTerm],
    queryFn: ({ pageParam = 1 }) => {
      return getPosts({ page: pageParam as number, searchTerm })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60,
  })
}
