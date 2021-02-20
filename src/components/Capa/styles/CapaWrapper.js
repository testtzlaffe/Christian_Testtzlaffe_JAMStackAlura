import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const CapaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${breakpointsMedia({
    xs: css`
      padding-top: 10px;
    `,
    md: css`
      padding-top: 40px;
    `,
  })}
`;
