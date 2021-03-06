import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }
  }}

  border-radius: ${({ theme }) => theme.borderRadiusButton};

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${({ theme }) =>
    breakpointsMedia({
      xs: theme.typographyVariants.smallestException,
      md: theme.typographyVariants.paragraph1,
    })}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: #444;
        cursor: not-allowed;
      `;
    }
  }}

  ${propToStyle('marginTop')}
  ${propToStyle('padding')}
  ${propToStyle('display')}
  ${propToStyle('disabled')}
`;
