import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: calc(864px + 1.5rem);
  width: 100%;
  padding: 0 1.5rem;
  margin: 4.5rem auto 1.5rem;
`

export const HeaderArticleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font: ${({ theme }) => theme.font.title.s};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  span {
    font: ${({ theme }) => theme.font.text.s};
    color: ${({ theme }) => theme.colors.base.span};
  }
`

export const Posts = styled.section`
  width: 100%;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`

export const MorePostsButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.label};
    font: ${theme.font.text.m};
    color: ${theme.colors.white};
  `}

  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.75rem 3rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
