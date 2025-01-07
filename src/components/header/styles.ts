import styled from 'styled-components'
import backgroundCover from '@/assets/cover.svg'

export const Container = styled.header`
  height: 18.5rem;
  background-color: ${({ theme }) => theme.colors.base.profile};
  background-image: url(${backgroundCover});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    background-position: left;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 1.5rem 0;

  display: flex;
  justify-content: center;
`
