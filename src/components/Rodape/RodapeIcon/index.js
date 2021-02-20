import styled from 'styled-components';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Icon } from './Icon';

const WrapperRodapeIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const RodapeIcon = () => {
  return (
    <WrapperRodapeIcon>
      <Icon
        href="https://www.linkedin.com/in/christian-testtzlaffe-alpoim/"
        target="_blank"
      >
        <FaLinkedin />
      </Icon>
      <Icon href="https://github.com/testtzlaffe" target="_blank">
        <FaGithubSquare />
      </Icon>
    </WrapperRodapeIcon>
  );
};
