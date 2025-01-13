import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.75rem 1rem;

    color: ${theme.colors.base.text};
    background-color: ${theme.colors.base.input};
    border: 0;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px ${theme.colors.base.border};

    &::placeholder {
      color: ${theme.colors.base.label};
    }

    &:focus {
      box-shadow: inset 0 0 0 1px ${theme.colors.blue};
    }
  `}
`
