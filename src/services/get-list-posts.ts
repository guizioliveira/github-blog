import { api, isAxiosError } from '@/lib/axios'

export interface GitHubPost {
  id: number
  title: string
  summary: string
  createdAt: string
}

export interface GitHubPostRequest {
  id: number
  title: string
  body: string
  created_at: string
}

export interface GitHubPostReturn {
  data: GitHubPost[]
  nextPage?: number
  totalCount: number
}

function mapGitHubPosts(posts: GitHubPostRequest[]): GitHubPost[] {
  return posts.map((post) => ({
    ...post,
    summary: post.body ? post.body.substring(0, 181) + '...' : '',
    createdAt: post.created_at,
  }))
}

export async function getPosts({
  page = 1,
  perPage = 10,
  searchTerm = '',
}: {
  page?: number
  perPage?: number
  searchTerm?: string
}): Promise<GitHubPostReturn> {
  const username = import.meta.env.VITE_GITHUB_USER
  const repo = import.meta.env.VITE_GITHUB_REPO

  if (!username || !repo) {
    throw new Error('user profile or repository not found')
  }

  try {
    let q = `repo:${username}/${repo} is:issue in:title,body`

    if (searchTerm) {
      q += ` ${searchTerm}`
    }

    const response = await api.get<{
      items: GitHubPostRequest[]
      total_count: number
    }>(`/search/issues`, {
      params: {
        q,
        page,
        per_page: perPage,
      },
    })

    // eslint-disable-next-line camelcase
    const { items, total_count } = response.data

    const data = mapGitHubPosts(items)
    const nextPage = data.length === perPage ? page + 1 : undefined

    // eslint-disable-next-line camelcase
    return { data, totalCount: total_count, nextPage }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `GitHub API returns status ${error.response.status}: ${error.response.statusText}`,
        )
      } else if (error.request) {
        throw new Error('No response for API do GitHub.')
      } else {
        throw new Error(`Error configuring request: ${error.message}`)
      }
    } else {
      throw new Error(`Unexpected error: ${(error as Error).message}`)
    }
  }
}
