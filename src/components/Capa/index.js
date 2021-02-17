import { Text } from '../Text';
import { CapaWrapper } from './styles/CapaWrapper';

export const Capa = () => {
  return (
    <CapaWrapper>
      <Text tag="h1" variant={{ xs: 'titleXS', md: 'title' }}>
        CHRISTIAN TESTTZLAFFE ALPOIM
      </Text>
      <Text tag="h2" variant="subTitle">
        Portfolio
      </Text>
    </CapaWrapper>
  );
};
