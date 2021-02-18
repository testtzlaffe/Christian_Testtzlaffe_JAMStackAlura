import styled from 'styled-components';
import { RodapeIcon } from './RodapeIcon';

const WraperRodape = styled.footer`
  display: flex;
  justify-content: center;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

export const Rodape = () => {
  return (
    <WraperRodape>
      <RodapeIcon />
    </WraperRodape>
  );
};
