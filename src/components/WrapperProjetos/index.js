import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { Cards } from './Cards';
import { SectionTitle } from './SectionTitle';

const Wrapper = styled.section`
  padding: 36px 0;
`;

export const WrapperProjetos = () => {
  return (
    <Wrapper>
      {/* <SectionTitle /> */}
      <Cards />
    </Wrapper>
  );
};
