import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { CabecalhoWrapper, HeaderContainer } from './styles/CabecalhoWrapper';

export const Cabecalho = () => {
  return (
    <CabecalhoWrapper>
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
    </CabecalhoWrapper>
  );
};
