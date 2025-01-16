import Profile from '@/pages/home/components/profile'
import { Header } from '../../components/header'
import { Container, HeaderArticleSection, Posts } from './styles'
import PostCard from './components/post-card'
import SearchInput from './components/search-input'
import { Spacing } from '@/components/ui'
import { getListPosts, GitHubPost } from '@/services/get-list-posts'
import { useQuery } from '@tanstack/react-query'
import { PostCardSkeleton } from '@/components/skeletons/post-card'

export default function Home() {
  const { data, isLoading } = useQuery<GitHubPost[], Error>({
    queryKey: ['githubPostList'],
    queryFn: () => getListPosts(),
    staleTime: 5 * 60 * 1000, // Fresh data for 5 minutes
    retry: 2,
  })

  const articleCount = data ? data.length : 0

  return (
    <>
      <Header />
      <Profile />
      <Container>
        <HeaderArticleSection>
          <h5>Articles</h5>
          <span>{articleCount} articles</span>
        </HeaderArticleSection>

        <Spacing apparence="s" />

        <SearchInput />

        <Posts>
          {data?.map((post: GitHubPost) => (
            <PostCard key={post.id} {...post} />
          ))}

          {isLoading && (
            <>
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
          )}
        </Posts>
      </Container>
    </>
  )
}
