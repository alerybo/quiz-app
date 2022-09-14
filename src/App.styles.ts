import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #e5dce0;
    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    color: #6e575d;
}
`;
export const Container = styled.div`
  width: 90vw;
  max-width: 450px;
  height: 70vh;
  padding: 2rem;

  border-radius: 42px;
  background: #e5dce0;
  box-shadow: 6px 6px 19px #d1d1d1, -6px -6px 19px #fbfbfb;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .score{
    margin-bottom: 2rem;
  }
`;
