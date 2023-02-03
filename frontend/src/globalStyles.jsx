import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0 auto;
    
    /* max-width: 1120px; */
    overflow-x: hidden;
    
   
  }

  body {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background-color: #ffffff;
    font-size: 1rem;
    font-family: 'Kumbh Sans', sans-serif;
    
  }
`;
