import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Poppins','Open Sans', 'Helvetica Neue', 'Baloo Bhaijan', 'cursive', Helvetica, Arial, sans-serif;
  }

  #app {
    // background-color: rgb(11, 92, 118);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Poppins, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
