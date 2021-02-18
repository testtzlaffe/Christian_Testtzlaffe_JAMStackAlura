import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { Text } from '../../Text';

export const LogoText = styled.a`
  display: flex;
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
    <LogoText
      href="https://www.linkedin.com/in/christian-testtzlaffe-alpoim/"
      target="_blank"
    >
      <FaLinkedin size={50} />
      {/* <Text
        tag="span"
        variant={{ xs: 'paragraph1XS', md: 'paragraph1' }}
        marginLeft="16px"
      >
        testtzlaffe
      </Text> */}
    </LogoText>
  );
};
