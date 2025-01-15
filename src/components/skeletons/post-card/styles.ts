import styled from 'styled-components'

export const ContainerSkeleton = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${({ theme }) => theme.colors.base.post};
  border-radius: 10px;

  text-align: unset;

  @media screen and (max-width: 768px) {
    span {
      max-width: 300px;
    }
  }
`

export const HeaderContentSkeleton = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    span {
      max-width: 200px;
    }
  }
`
