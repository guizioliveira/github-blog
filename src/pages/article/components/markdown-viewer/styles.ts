import styled, { css } from 'styled-components'

export const MarkdownContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font: ${theme.font.text.m};
    word-wrap: break-word;

    p,
    pre {
      margin-bottom: 1rem;
    }

    ul,
    ol {
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 160%;
      color: ${theme.colors.base.title};
      font-family: ${theme.font.family};
      font-weight: bold;
      margin: 1.5rem 0 1rem;
    }

    a {
      color: ${theme.colors.blue};
      font-weight: bold;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    img {
      max-width: 100%;
      display: block;
      margin: 1rem auto;
    }

    pre > div {
      background: ${theme.colors.base.post} !important;
      border-radius: 6px;
    }

    blockquote {
      border-left: 4px solid ${theme.colors.base.label};
      padding-left: 1rem;
      margin-left: 0;
      margin-right: 0;
      color: ${theme.colors.base.span};
    }

    hr {
      border: 0;
      height: 1px;
      background-color: ${theme.colors.base.border};
      margin: 2rem 0;
    }

    @media screen and (max-width: 768px) {
      code {
        font-size: 0.75rem;
      }
    }
  `}
`
