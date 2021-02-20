import styled from 'styled-components';
import { Text } from '../../commons/Text';

const links = [
  { name: 'Sobre Mim', url: '#' },
  { name: 'Contato', url: '#' },
];

const NavbarWrapper = styled.nav``;

const NavbarItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.background.main.contrastText};
  margin-right: 38px;
  &:last-child {
    margin-right: 0;
  }
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.background.hover.contrastText};
  }
`;

export const Navbar = () => {
  return (
    <NavbarWrapper>
      {links.map((link) => (
        <NavbarItem key={link.name} href={link.url}>
          <Text tag="span" variant={{ xs: 'paragraph1XS', md: 'paragraph1' }}>
            {link.name}
          </Text>
        </NavbarItem>
      ))}
    </NavbarWrapper>
  );
};
