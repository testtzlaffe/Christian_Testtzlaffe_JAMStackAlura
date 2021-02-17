import styled from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${({ theme, variant }) => {
    if (typeof variant === 'string') {
      return get(theme.typographyVariants, variant);
    }

    if (typeof variant === 'object') {
      return breakpointsMedia({
        xs: get(theme.typographyVariants, variant.xs),
        sm: get(theme.typographyVariants, variant.sm),
        md: get(theme.typographyVariants, variant.md),
        lg: get(theme.typographyVariants, variant.lg),
        xl: get(theme.typographyVariants, variant.xl),
      });
    }
  }}

  ${propToStyle('margin')}
`;

export const Text = ({ tag, variant, children, ...props }) => {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};
