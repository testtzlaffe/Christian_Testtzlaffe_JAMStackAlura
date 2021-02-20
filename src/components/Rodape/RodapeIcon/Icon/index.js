import styled from 'styled-components';

export const Icon = styled.a`
  text-decoration: none;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  padding: 16px 16px 8px 16px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main.color};
  }
`;
