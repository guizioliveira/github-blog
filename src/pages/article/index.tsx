import { usePost } from '@/hooks/usePost'
import { ArticleHeader } from './components/article-header'
import { useParams } from 'react-router-dom'
import ArticleHeaderSkeleton from '@/components/skeletons/article-header'
import { BodyContent } from './styles'
import MarkdownViewer from './components/markdown-viewer'

export function Article() {
  const { id } = useParams()
  const { data, isLoading, isError } = usePost(Number(id))

  if (isLoading) {
    return <ArticleHeaderSkeleton />
  }

  if (isError || !data) {
    return <p>Not found</p>
  }

  const { body, ...headerData } = data

  return (
    <>
      <ArticleHeader data={headerData} />
      <BodyContent>
        <MarkdownViewer>{body}</MarkdownViewer>
      </BodyContent>
    </>
  )
}
