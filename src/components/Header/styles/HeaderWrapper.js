import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const HeaderWrapper = styled.header`
  padding: 20px 32px 60px 32px;

  background-color: ${({ theme }) => theme.colors.background.light.color};

  ${breakpointsMedia({
    xs: css`
      height: 40px;
    `,
    md: css`
      height: 67px;
    `,
  })}
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;
