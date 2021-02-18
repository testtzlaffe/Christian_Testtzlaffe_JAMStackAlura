import styled from 'styled-components';

export const ButtonLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;
