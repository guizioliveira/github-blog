import { useInfiniteQuery } from '@tanstack/react-query'
import { getPosts, GitHubPostReturn } from '@/services/get-list-posts'

interface UsePostsInfiniteQueryParams {
  searchTerm?: string
  initialPage?: number
}

export function usePostsInfiniteQuery({
  searchTerm = '',
  initialPage = 1,
}: UsePostsInfiniteQueryParams) {
  return useInfiniteQuery<GitHubPostReturn>({
    queryKey: ['github-posts', searchTerm],
    queryFn: ({ pageParam = 1 }) => {
      return getPosts({ page: pageParam as number, searchTerm })
    },
    initialPageParam: initialPage,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })
}
