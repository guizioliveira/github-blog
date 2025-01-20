import { api, isAxiosError } from '@/lib/axios'

export interface Post {
  title: string
  body: string
  comments: number
  createdAt: string
  githubUrl: string
  username: string
}

interface SinglePostRequest {
  title: string
  body: string
  comments: number
  created_at: string
  html_url: string
  user: { login: string }
}

export const getPost = async (postId: number): Promise<Post> => {
  const username = import.meta.env.VITE_GITHUB_USER
  const repo = import.meta.env.VITE_GITHUB_REPO

  if (username === undefined) {
    throw new Error('article not found')
  }

  try {
    const response = await api.get<SinglePostRequest>(
      `repos/${username}/${repo}/issues/${postId}`,
    )

    const data = response.data

    return {
      title: data.title,
      body: data.body,
      comments: data.comments,
      createdAt: data.created_at,
      githubUrl: data.html_url,
      username: data.user.login,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `GitHub API returns  status ${error.response.status}: ${error.response.statusText}`,
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
