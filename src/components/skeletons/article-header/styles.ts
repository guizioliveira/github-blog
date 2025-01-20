import styled from 'styled-components'

export const ContainerSkeleton = styled.section`
  padding: 2rem;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
`

export const ContentSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    p {
      span {
        span {
          max-width: 250px !important;
        }
      }
    }
  }
`

export const SocialMediaGroupSkeleton = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`

export const SocialMediaSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    word-wrap: break-word;
  }

  @media screen and (max-width: 768px) {
    span {
      &:last-child {
        span {
          max-width: 50px !important;
        }
      }
    }
  }
`

export const LinkGroupSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
