import styled, { css } from 'styled-components';
import { FaGithubAlt } from 'react-icons/fa';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Text } from '../../commons/Text';

export const LogoText = styled.a`
  display: flex;
  ${breakpointsMedia({
    xs: css`
      font-size: 28px;
    `,
    md: css`
      font-size: 44px;
    `,
  })}
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.background.main.contrastText};
  margin-right: 38px;

  &:hover {
    color: ${({ theme }) => theme.colors.background.hover.contrastText};
  }
`;

export const Logo = () => {
  return (
    <LogoText href="https://github.com/testtzlaffe" target="_blank">
      <FaGithubAlt />
      <Text
        tag="span"
        variant={{ xs: 'paragraph1XS', md: 'paragraph1' }}
        marginLeft="6px"
        display={{ xs: 'none', md: 'block' }}
      >
        /testtzlaffe
      </Text>
    </LogoText>
  );
};
