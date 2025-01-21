import styled, { css } from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.base.profile};
  height: calc(100vh - 296px);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 10;

  h1 {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.colors.base.title};
    font-weight: 600;
    font-size: 12rem;
    line-height: 100%;
    position: relative;

    span {
      position: absolute;
      background-color: #3294f8;
      font-size: 1rem;
      bottom: 45px;
      width: max-content;
      line-height: 100%;
      padding: 0.5rem 0.75rem;
      left: 50%;
      transform: translateX(-50%) rotate(354deg);
    }
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.base.span};
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 7rem;

      span {
        bottom: 25px;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
      }
    }

    p {
      font-size: 1rem;
    }
  }
`

export const Vignette = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.2) 100%
  );
`

export const Button = styled.button`
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

  font-weight: bold;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`
