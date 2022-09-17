import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${'' /* put your global css here */}
  html {
    scroll-behavior: smooth;
  }
  body {
    color: ${({ theme }) => theme.colors.fontColor}
  }
`;
