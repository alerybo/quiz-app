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
    display: flex;
    justify-content: center;
    align-items: center;

}
`;
export const Container = styled.div`
  width: 90vw;
  max-width: 450px;
  height: 80vh;
  padding: 2rem;

  border-radius: 42px;
  background: #e5dce0;
  box-shadow: 6px 6px 19px #d1d1d1, -6px -6px 19px #fbfbfb;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .modal {
    text-align: center;
  }

  .score {
    margin-bottom: 2rem;
  }

  .btn-container {
    text-align: center;
  }

  .btn {
    cursor: pointer;

    font-family: "Source Sans Pro", sans-serif;
    border: none;
    padding: 0.8rem;
    margin: 1rem;
    color: #6e575d;

    border-radius: 42px;
    background: #e5dce0;
    box-shadow: 6px 6px 19px #d1d1d1, -6px -6px 19px #fbfbfb;
  }

  .btn:hover {
    box-shadow: inset 5px 5px 10px #c7c7c7, inset -5px -5px 10px #f9f9f9;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
`;
