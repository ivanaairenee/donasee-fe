import { injectGlobal } from 'styled-components';


/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    min-height: 100vh;
    width: 100%;
    background: #dedede;
    overflow-y: auto;
    overflow-x: hidden;
  }

  h1 {
      margin-top: 1rem 0 0 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: #646464;
  }

  h2 {
    color: #646464;
    font-weight: 700;
    font-size: 1rem;
  }

  h3 {
    margin: 0;
    font-size: 0.8rem;
    color: #646464;
    font-weight:300;
  }

  h4 {
    font-family: 'Open Sans';
    font-size: 0.7rem;
    color: #646464;
    font-weight:300;
    text-align: left;
    margin: 0.5rem 0 0.2rem 0.5rem;
  }

  hr {
    border-top: 1px dashed #dedede;
  }

  a {
    color: #ff5a5f;
    text-decoration: none;
  }

  input {
    outline: 0;
    width: 20rem;
    background: #fafafa;
    border: 1px solid #dedede;
    font-size: 0.7rem;
    color: #646464;
    font-family: 'Open Sans';
    height: 2.5rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 6px 15px #dedede;

    @media screen and (max-width: 40em){
      width: 15rem;
    }
  }

  textarea {
    outline: 0;
    width: 20rem;
    background: #fafafa;
    border: 1px solid #dedede;
    font-size: 0.7rem;
    color: #646464;
    font-family: 'Open Sans';
    height: 2.5rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 6px 15px #dedede;
    min-height:5rem;
  }

  button {
    outline: 0;
  }

  body {
    font-family: 'Montserrat';
  }

  body.fontLoaded {
    font-family: 'Montserrat','Quicksand', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
