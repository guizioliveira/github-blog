import styled from 'styled-components'

export const Container = styled.div`
  max-width: calc(864px + 1.5rem);
  width: 100%;
  padding: 0 1.5rem;
  margin: 4.5rem auto 1.5rem;
`

export const Posts = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`
