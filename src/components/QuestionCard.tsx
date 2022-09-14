import React from "react";
import { AnswerObject } from "../App";
import { Question } from "./QuestionCard.styles";
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
        <div key={answer}>
          <button
            className="answer"
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </Question>
);

export default QuestionCard;
