import styled from 'styled-components';
import { FooterIcon } from './FooterIcon';

const WraperFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

export const Footer = () => {
  return (
    <WraperFooter>
      <FooterIcon />
    </WraperFooter>
  );
};
