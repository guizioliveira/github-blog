import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font: ${({ theme }) => theme.font.title.l};
    color: ${({ theme }) => theme.colors.base.title};
  }

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`

export const SocialMediaGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    gap: 0;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.base.span};

  svg {
    color: ${({ theme }) => theme.colors.base.label};
  }

  span {
    word-wrap: break-word;
  }

  @media screen and (max-width: 768px) {
    font: ${({ theme }) => theme.font.text.xs};
  }
`

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const Sufix = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
