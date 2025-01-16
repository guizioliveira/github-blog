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

export const getListPosts = async (
  page: number = 1,
): Promise<{ data: GitHubPost[]; nextPage?: number }> => {
  const username = import.meta.env.VITE_GITHUB_USER
  const repo = import.meta.env.VITE_GITHUB_REPO

  if (!username || !repo) {
    throw new Error('user profile or repository not found')
  }

  try {
    const response = await api.get<GitHubPostRequest[]>(
      `/repos/${username}/${repo}/issues`,
      {
        params: {
          per_page: 10,
          page,
        },
      },
    )
    const data = response.data.map((post) => ({
      ...post,
      summary: post.body ? post.body.substring(0, 181) + '...' : '',
      createdAt: post.created_at,
    }))

    const nextPage = data.length === 10 ? page + 1 : undefined

    return { data, nextPage }
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
