import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";
import "@fontsource/charm";
import "@fontsource/cinzel";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/500.css";
import "@fontsource/cinzel/600.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/cinzel/900.css";

const GlobalStyles = createGlobalStyle`
${
  "" /* 
*{
    outline: 1px solid red !important;
} */
}

html{
    scroll-behavior: smooth;
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`;

export default GlobalStyles;
