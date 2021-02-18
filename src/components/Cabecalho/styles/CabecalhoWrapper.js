import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const CabecalhoWrapper = styled.header`
  padding: 40px;

  background-color: ${({ theme }) => theme.colors.background.light.color};

  /* border-bottom: 2px solid ${({ theme }) =>
    theme.colors.primary.main.color}; */
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
  max-width: 1400px;
  margin: 0 auto;
`;
