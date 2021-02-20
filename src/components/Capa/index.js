import { Button } from '../commons/Button';
import { Text } from '../Text';
import { ButtonLink } from './styles/ButtonLink';
import { CapaWrapper } from './styles/CapaWrapper';
import { Foto } from './styles/Foto';

export const Capa = () => {
  return (
    <CapaWrapper>
      <Foto src="https://avatars.githubusercontent.com/u/50345995?s=460&u=44aa87e4ff3d423b7bb0566ef035f0d48bac6b00&v=4" />
      <Text tag="h1" variant={{ xs: 'titleXS', md: 'title' }}>
        Olá, sou Testtzlaffe
      </Text>
      <Text tag="h2" variant={{ xs: 'subTitleXS', md: 'subTitle' }}>
        Desenvolvimento Web
      </Text>
      <Text
        tag="h2"
        variant={{ xs: 'subTitle2XS', md: 'subTitle2' }}
        marginTop={{ md: '40px' }}
      >
        Contador e estudante de programação. Atualmente aprendendo React,
        Next.js e Node.js.
      </Text>

      <Button
        variant="primary.main"
        padding={{ xs: '10px 40px', md: '0 60px' }}
        marginTop={{ xs: '32px', md: '40px' }}
      >
        <ButtonLink
          href="https://www.linkedin.com/in/christian-testtzlaffe-alpoim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text tag="span" variant={{ xs: 'subTitle2XS', md: 'subTitle2' }}>
            ENTRE EM CONTATO
          </Text>
        </ButtonLink>
      </Button>
    </CapaWrapper>
  );
};
