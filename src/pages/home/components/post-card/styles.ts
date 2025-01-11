import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 260px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${({ theme }) => theme.colors.base.post};
  border: 2px solid;
  border-color: transparent;
  border-radius: 10px;

  text-align: unset;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.base.label};
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    flex: 1;
    font: ${({ theme }) => theme.font.title.m};
    color: ${({ theme }) => theme.colors.base.title};
  }

  span {
    font: ${({ theme }) => theme.font.text.s};
    color: ${({ theme }) => theme.colors.base.span};
  }
`

export const Summary = styled.p`
  color: ${({ theme }) => theme.colors.base.span};
`
