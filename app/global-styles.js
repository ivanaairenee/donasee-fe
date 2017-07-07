import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    min-height: 100vh;
    width: 100%;
    background: #FAFAFA;
    overflow-y: auto;
    overflow-x: hidden;
  }

  body {
    font-family: sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'sans-serif', Helvetica, Arial, sans-serif;
  }

  #app {
    width: 100%;
    min-height: 100vh;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
  }

`;
