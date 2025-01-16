import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 1rem;

  color: white;
  background-color: ${({ theme }) => theme.colors.base.border};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  border: none;
  border-radius: 6px;

  cursor: pointer;
  z-index: 1000;
`
