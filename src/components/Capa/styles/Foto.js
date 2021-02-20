import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const Foto = styled.img`
  border-radius: 50%;
  ${breakpointsMedia({
    xs: css`
      width: 70px;
      height: 70px;
    `,
    md: css`
      width: 100px;
      height: 100px;
    `,
  })}
`;
