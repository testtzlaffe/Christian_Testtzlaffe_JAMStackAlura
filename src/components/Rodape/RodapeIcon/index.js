import styled from 'styled-components';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Icon } from './Icon';

const WrapperRodapeIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};

  a:first-child {
    margin-right: 46px;
  }
`;

export const RodapeIcon = () => {
  return (
    <WrapperRodapeIcon>
      <Icon
        href="https://www.linkedin.com/in/christian-testtzlaffe-alpoim/"
        target="_blank"
      >
        <FaLinkedin size={36} />
      </Icon>
      <Icon href="https://github.com/testtzlaffe" target="_blank">
        <FaGithubSquare size={36} />
      </Icon>
    </WrapperRodapeIcon>
  );
};
