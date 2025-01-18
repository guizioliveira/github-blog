import React, { useState } from 'react'
import { Header } from '@/components/header'
import { PostCardSkeleton } from '@/components/skeletons/post-card'
import { Profile } from '@/pages/home/components/profile'
import { GitHubPost } from '@/services/get-list-posts'
import { PostCard } from './components/post-card'
import { SearchInput } from './components/search-input'
import {
  Container,
  MorePostsButton,
  Posts,
  SearchHeader,
  SearchWraooer,
} from './styles'
import { FaAngleDown } from 'react-icons/fa'
import { BackToTopButton } from '@/components/back-to-top-button'
import { useDebounce } from '@/hooks/useDebounce'
import { usePostsInfiniteQuery } from '@/hooks/usePostsInfiniteQuery'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const { data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    usePostsInfiniteQuery({ searchTerm: debouncedSearch })

  const articleCount = data?.pages[0]?.totalCount || 0

  return (
    <>
      <BackToTopButton />
      <Header />
      <Container>
        <Profile />

        <SearchWraooer>
          <SearchHeader>
            <h5>Articles</h5>
            <span>{articleCount} articles</span>
          </SearchHeader>

          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchWraooer>

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
          <MorePostsButton
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            More posts
            <FaAngleDown size={16} />
          </MorePostsButton>
        )}
      </Container>
    </>
  )
}
