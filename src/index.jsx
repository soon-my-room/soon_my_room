import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration:none;
    cursor: pointer;
    color:inherit;
  }
    
  * {
    box-sizing:border-box;
  }

  body {
    font-size: 10px;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }

  input {
    &:focus {
      outline:none;
    }
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
  }
  
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  
  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0, 0);
  }

  :root {
    --main-color: #00BFD7;
    --main-disabled-color: #00BED798;
    --main-text-color: #049DB2;
    --main-title-color: #000000;
    --subtitle-text: #767676;
    --disabled-text-color: #FFFFFF;
    --border-gray: #DBDBDB;
    --warning-color: #EB5757;
    --bg-color: #FFFFFF;
  }
`;

const AppFixedWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AppFixedWrap>
        <App />
      </AppFixedWrap>
    </BrowserRouter>
  </>,
);
