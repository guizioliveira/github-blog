import { usePost } from '@/hooks/usePost'
import { ArticleHeader } from './components/article-header'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleHeaderSkeleton from '@/components/skeletons/article-header'
import { BodyContent } from './styles'
import MarkdownViewer from './components/markdown-viewer'
import { BackToTopButton } from '@/components/back-to-top-button'

export function Article() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError } = usePost(Number(id))

  if (isLoading) {
    return <ArticleHeaderSkeleton />
  }

  if (isError || !data) {
    navigate('/not-found')
    return null
  }

  const { body, ...headerData } = data

  return (
    <>
      <BackToTopButton />
      <ArticleHeader data={headerData} />
      <BodyContent>
        <MarkdownViewer>{body}</MarkdownViewer>
      </BodyContent>
    </>
  )
}
