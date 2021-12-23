import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Jost', sans-serif;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: inherit;
    font-weight: 500;
    background-color: #ffffff;
  }
  p {
    line-height: 2;
  }
  ul {
    list-style: none;
  }
  a {
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;
