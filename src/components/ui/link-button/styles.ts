import styled from 'styled-components'

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  font: ${({ theme }) => theme.font.text.s};
  font-weight: bold;

  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`
