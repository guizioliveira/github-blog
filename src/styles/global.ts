import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.base.background};
      color: ${theme.colors.base.text};
      -webkit-font-smoothing: antialiased;
    `}
  }

  body, input, textarea, button {
    font: ${({ theme }) => theme.font.text.m}
  }

  input {
    &:is(
          :-webkit-autofill,
          :autofill,
          :-webkit-autofill,
          :-webkit-autofill:hover,
          :-webkit-autofill:focus,
          :-webkit-autofill:active
        ) {
        transition: all 5000s ease-in-out 0s;
      }
  }
`
