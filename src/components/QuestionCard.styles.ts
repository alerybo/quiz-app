import styled from "styled-components";

export const Question = styled.div`
  text-align: center;

  .question {
    margin-bottom: 2rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
  }
`;

type AnswerProps = {
  correct: boolean;
  userClicked: boolean;
};

export const AnswerWrapper = styled.div<AnswerProps>`
  button {
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;

    color: #6e575d;
    font-family: "Source Sans Pro", sans-serif;

    border: none;
    border-radius: 50px;
    box-shadow: 5px 5px 10px #cecece, -5px -5px 10px #f2f2f2;

    background: ${({ correct, userClicked }) =>
      correct ? "#d1e8c5" : !correct && userClicked ? "#f0c0c6" : "#e5dce0"};

    transition: all 0.2s ease;
  }

  button:hover {
    box-shadow: inset 5px 5px 6px
        ${({ correct, userClicked }) =>
          correct
            ? "#baceaf"
            : !correct && userClicked
            ? "#d6abb0"
            : "#cecece"},
      inset -5px -5px 6px
        ${({ correct, userClicked }) =>
          correct
            ? "#e8ffdb"
            : !correct && userClicked
            ? "#ffd5dc"
            : "#f2f2f2"};
  }
`;
