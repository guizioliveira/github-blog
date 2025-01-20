import React, { useState } from 'react'
import { PostCardSkeleton } from '@/components/skeletons/post-card'
import { Profile } from '@/pages/home/components/profile'
import { GitHubPost } from '@/services/get-list-posts'
import { PostCard } from './components/post-card'
import { SearchInput } from './components/search-input'
import {
  MorePostsButton,
  NoDataMessage,
  Posts,
  SearchHeader,
  SearchWraooer,
} from './styles'
import { FaAngleDown } from 'react-icons/fa'
import { BackToTopButton } from '@/components/back-to-top-button'
import { useDebounce } from '@/hooks/useDebounce'
import { usePostsInfiniteQuery } from '@/hooks/usePostsInfiniteQuery'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)
  const navigate = useNavigate()

  const { data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    usePostsInfiniteQuery({ searchTerm: debouncedSearch })

  const articleCount = data?.pages[0]?.totalCount || 0

  return (
    <>
      <BackToTopButton />
      <Profile />
      <SearchWraooer>
        <SearchHeader>
          <h3>Articles</h3>
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
            {group.data.map((post: GitHubPost) => {
              const { id, ...rest } = post
              return (
                <PostCard
                  key={id}
                  {...rest}
                  onClick={() => navigate(`/articles/${post.id}`)}
                />
              )
            })}
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

      {!data?.pages[0]?.data.length && !isFetching && (
        <NoDataMessage>
          <h3>No results</h3>
          <p>Try adjusting your search filters.</p>
        </NoDataMessage>
      )}

      {hasNextPage && (
        <MorePostsButton
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          More posts
          <FaAngleDown size={16} />
        </MorePostsButton>
      )}
    </>
  )
}
