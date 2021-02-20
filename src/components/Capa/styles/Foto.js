import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const Foto = styled.img`
  border-radius: 50%;
  ${breakpointsMedia({
    xs: css`
      width: 80px;
      height: 80px;
    `,
    md: css`
      width: 120px;
      height: 120px;
    `,
  })}
`;
