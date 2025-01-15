import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ContainerSkeleton, HeaderContentSkeleton } from './styles'
import { defaultTheme } from '@/styles/themes/default'

export const PostCardSkeleton: React.FC = () => {
  return (
    <SkeletonTheme
      baseColor={defaultTheme.colors.base.border}
      highlightColor={defaultTheme.colors.base.post}
    >
      <ContainerSkeleton>
        <HeaderContentSkeleton>
          <Skeleton width={230} height={20} />
          <Skeleton width={80} height={20} />
        </HeaderContentSkeleton>
        <Skeleton count={5} height={16} />
      </ContainerSkeleton>
    </SkeletonTheme>
  )
}
