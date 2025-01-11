import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  margin-top: -5.5rem;
  padding: 0 1.5rem;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  padding: 2rem;
  position: relative;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;

  ${({ theme }) => css`
    font: ${theme.font.text.m};
    color: ${theme.colors.base.text};
  `}

  a {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font: ${({ theme }) => theme.font.text.s};
  }
`

export const Picture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`

export const SocialMediaGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`

export const SocialMedia = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.base.subtitle};

  svg {
    fill: ${({ theme }) => theme.colors.base.label};
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${({ theme }) => css`
    h3 {
      font: ${theme.font.title.l};
      color: ${theme.colors.base.title};
    }
  `}

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      font: ${({ theme }) => theme.font.title.m};
    }
  }
`
