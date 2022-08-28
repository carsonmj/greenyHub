import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
