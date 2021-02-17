import styled from 'styled-components';

export const Icon = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.main.color};
  }
`;
