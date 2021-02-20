import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { HeaderWrapper, HeaderContainer } from './styles/HeaderWrapper';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
