import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { CabecalhoWrapper } from './styles/CabecalhoWrapper';

export const Cabecalho = () => {
  return (
    <CabecalhoWrapper>
      <Logo />
      <Navbar />
    </CabecalhoWrapper>
  );
};
