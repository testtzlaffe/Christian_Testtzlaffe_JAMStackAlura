import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background.light.color};
    color: ${({ theme }) => theme.colors.background.main.contrastText}
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
