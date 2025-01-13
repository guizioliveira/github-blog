import { api, isAxiosError } from '@/lib/axios'

export interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  bio?: string
  followers: number
}

export const getProfile = async (): Promise<GitHubUser> => {
  const username = import.meta.env.VITE_GITHUB_USER

  if (username === undefined) {
    throw new Error('user profile not found')
  }

  try {
    const response = await api.get<GitHubUser>(`/users/${username}`)
    return response.data
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
