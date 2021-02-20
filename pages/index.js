import { Header } from '../src/components/Header';
import { Capa } from '../src/components/Capa';
import { Container } from '../src/components/commons/Container';
import { Footer } from '../src/components/Footer';
import { WrapperProjects } from '../src/components/WrapperProjects';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Capa />
        <WrapperProjects />
      </Container>
      <Footer />
    </>
  );
}
