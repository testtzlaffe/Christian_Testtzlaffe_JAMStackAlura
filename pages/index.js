import { Cabecalho } from '../src/components/Cabecalho';
import { Capa } from '../src/components/Capa';
import { Rodape } from '../src/components/Rodape';
import { WrapperProjetos } from '../src/components/WrapperProjetos';

export default function Home() {
  return (
    <>
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
      <Rodape />
    </>
  );
}
