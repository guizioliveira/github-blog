import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  PictureSkeletonWrapper,
  SocialMediaGroupSkeleton,
  DescriptionSkeleton,
  Container,
  Content,
  SocialMediaSkeleton,
  LinkButtonSkeleton,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'
import { Spacing } from '@/components/ui'

export const ProfileSkeleton: React.FC = () => {
  return (
    <SkeletonTheme
      baseColor={defaultTheme.colors.base.border}
      highlightColor={defaultTheme.colors.base.post}
    >
      <Container>
        <Content>
          <LinkButtonSkeleton>
            <Skeleton width={70} height={30} />
          </LinkButtonSkeleton>

          <PictureSkeletonWrapper>
            <Skeleton />
          </PictureSkeletonWrapper>

          <DescriptionSkeleton>
            <Skeleton width={250} height={24} />
            <Skeleton count={2} width={300} />

            <Spacing apparence="s" />

            <SocialMediaGroupSkeleton>
              <SocialMediaSkeleton>
                <Skeleton width={18} height={18} />
                <Skeleton width={80} />
              </SocialMediaSkeleton>

              <SocialMediaSkeleton>
                <Skeleton width={18} height={18} />
                <Skeleton width={80} />
              </SocialMediaSkeleton>

              <SocialMediaSkeleton>
                <Skeleton width={18} height={18} />
                <Skeleton width={80} />
              </SocialMediaSkeleton>
            </SocialMediaGroupSkeleton>
          </DescriptionSkeleton>
        </Content>
      </Container>
    </SkeletonTheme>
  )
}