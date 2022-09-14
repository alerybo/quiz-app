import React from "react";
import { AnswerObject } from "../App";
import { Question, AnswerWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Question>
    <p className="number">
      {questionNumber} | {totalQuestions}
    </p>
    <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
    <div className="answers">
      {answers.map((answer) => (
        <AnswerWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </AnswerWrapper>
      ))}
    </div>
  </Question>
);

export default QuestionCard;
