import styled from 'styled-components';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Icon } from './Icon';

const WrapperFooterIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterIcon = () => {
  return (
    <WrapperFooterIcon>
      <Icon
        href="https://www.linkedin.com/in/christian-testtzlaffe-alpoim/"
        target="_blank"
      >
        <FaLinkedin />
      </Icon>
      <Icon href="https://github.com/testtzlaffe" target="_blank">
        <FaGithubSquare />
      </Icon>
    </WrapperFooterIcon>
  );
};
