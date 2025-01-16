import { Header } from '@/components/header'
import { PostCardSkeleton } from '@/components/skeletons/post-card'
import { Spacing } from '@/components/ui'
import Profile from '@/pages/home/components/profile'
import { getListPosts, GitHubPost } from '@/services/get-list-posts'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import PostCard from './components/post-card'
import SearchInput from './components/search-input'
import {
  Container,
  HeaderArticleSection,
  MorePostsButton,
  Posts,
} from './styles'
import { FaAngleDown } from 'react-icons/fa'
import { BackToTopButton } from '@/components/back-to-top-button'

export default function Home() {
  const { data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['githubPostList'],
      queryFn: ({ pageParam = 1 }) => getListPosts(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    })

  const articleCount =
    data?.pages.reduce((acc, page) => acc + page.data.length, 0) || 0

  return (
    <>
      <BackToTopButton />
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
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.data.map((post: GitHubPost) => (
                <PostCard key={post.id} {...post} />
              ))}
            </React.Fragment>
          ))}

          {(isFetching || isFetchingNextPage) && (
            <>
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
          )}
        </Posts>
        {hasNextPage && (
          <>
            <Spacing apparence="m" />
            <MorePostsButton
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              More posts
              <FaAngleDown size={16} />
            </MorePostsButton>
          </>
        )}
      </Container>
    </>
  )
}
