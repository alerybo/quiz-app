import styled from "styled-components";

export const Question = styled.div`
  text-align: center;

  .question {
    margin-bottom: 1rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
  }

  .answer {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;

    border: none;
    border-radius: 50px;
    background: #e5dce0;
    box-shadow: 5px 5px 10px #cecece, -5px -5px 10px #f2f2f2;
  }
`;
