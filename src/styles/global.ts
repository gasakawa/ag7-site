import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    background-color: #fff;
    color: #2f3459;
    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
}

`;
export default GlobalStyles;
