import styled, { css } from 'styled-components'

export const SearchWraooer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;

  h3 {
    font: ${({ theme }) => theme.font.title.s};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  span {
    font: ${({ theme }) => theme.font.text.s};
    color: ${({ theme }) => theme.colors.base.span};
  }

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`

export const Posts = styled.section`
  width: 100%;
  margin: 3rem auto 1.5rem;

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
    font-weight: bold;
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

  @media screen and (max-width: 390px) {
    padding: 0.75rem 2rem;
  }
`

export const NoDataMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font: ${({ theme }) => theme.font.text.m};
    color: ${({ theme }) => theme.colors.base.span};
  }
`
