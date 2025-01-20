import {
  ContainerSkeleton,
  ContentSkeleton,
  LinkGroupSkeleton,
  SocialMediaGroupSkeleton,
  SocialMediaSkeleton,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function ArticleHeaderSkeleton() {
  return (
    <SkeletonTheme
      baseColor={defaultTheme.colors.base.border}
      highlightColor={defaultTheme.colors.base.post}
    >
      <ContainerSkeleton>
        <ContentSkeleton>
          <LinkGroupSkeleton>
            <div>
              <Skeleton width={23} height={23} />
              <Skeleton width={70} height={23} />
            </div>
            <div>
              <Skeleton width={70} height={23} />
              <Skeleton width={23} height={23} />
            </div>
          </LinkGroupSkeleton>

          <p>
            <Skeleton width={600} height={24} />
            <Skeleton width={300} height={24} />
          </p>

          <SocialMediaGroupSkeleton>
            <SocialMediaSkeleton>
              <Skeleton width={18} height={18} />
              <Skeleton width={85} height={18} />
            </SocialMediaSkeleton>

            <SocialMediaSkeleton>
              <Skeleton width={18} height={18} />
              <Skeleton width={85} height={18} />
            </SocialMediaSkeleton>

            <SocialMediaSkeleton>
              <Skeleton width={18} height={18} />
              <Skeleton width={85} height={18} />
            </SocialMediaSkeleton>
          </SocialMediaGroupSkeleton>
        </ContentSkeleton>
      </ContainerSkeleton>
    </SkeletonTheme>
  )
}
