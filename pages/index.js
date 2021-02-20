import { Cabecalho } from '../src/components/Cabecalho';
import { Capa } from '../src/components/Capa';
import { Container } from '../src/components/commons/Container';
import { Rodape } from '../src/components/Rodape';
import { WrapperProjetos } from '../src/components/WrapperProjetos';

export default function Home() {
  return (
    <>
      <Cabecalho />

      <Container>
        <Capa />
        {/* <WrapperProjetos /> */}
      </Container>
      <Rodape />
    </>
  );
}
