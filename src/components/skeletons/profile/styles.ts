import styled from 'styled-components'

export const Content = styled.section`
  min-height: 212px;

  display: flex;
  align-items: flex-end;
  gap: 2rem;
  padding: 2rem;
  position: relative;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LinkButtonSkeleton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media screen and (max-width: 768px) {
    position: unset;
    margin-bottom: -16px;
  }
`

export const PictureSkeletonWrapper = styled.div`
  span > span {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
      width: 7rem;
      height: 7rem;
    }
  }
`

export const DescriptionSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const SocialMediaGroupSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.75rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`
export const SocialMediaSkeleton = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    span {
      &:last-child {
        span {
          width: 60px !important;
        }
      }
    }
  }
`
