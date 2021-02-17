import styled from 'styled-components';

const LogoImage = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
`;

export const Logo = () => {
  return <LogoImage>LOGO</LogoImage>;
};
