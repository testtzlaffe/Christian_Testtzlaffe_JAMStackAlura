import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { Cards } from './Cards';
import { SectionTitle } from './SectionTitle';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      padding: 32px 0;
    `,
    md: css`
      padding: 64px 0;
    `,
  })}
`;

export const WrapperProjetos = () => {
  return (
    <Wrapper>
      <SectionTitle />
      <Cards />
    </Wrapper>
  );
};
