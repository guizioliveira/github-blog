import styled, { css } from 'styled-components'

export const Container = styled.section`
  padding: 2rem;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  position: relative;

  min-height: 212px;

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

    a {
      position: unset;
      margin-bottom: -25px;
    }
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
    font-size: 0.75rem;
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

  p {
    margin-bottom: 0.75rem;
  }

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

export const NoUserFound = styled.p`
  font: ${({ theme }) => theme.font.text.l};
  padding: 2rem 0;
`
