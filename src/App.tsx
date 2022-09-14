import React, { useState } from "react";
//Functions
import { fetchQuizQuestions } from "./API";
//Components
import QuestionCard from "./components/QuestionCard";
import ReactLoading from "react-loading";
//Types
import { Difficulty, QuestionState } from "./API";
//Styles
import { GlobalStyle, Container } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async (difficulty: Difficulty) => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Trivia</h1>
        {gameOver && questions.length === 0 ? (
          <p className="modal">Choose difficulty level</p>
        ) : userAnswers.length === TOTAL_QUESTIONS ? (
          <p className="modal">Play again</p>
        ) : null}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => startTrivia(Difficulty.EASY)}
            >
              EASY
            </button>
            <button
              className="btn"
              onClick={() => startTrivia(Difficulty.MEDIUM)}
            >
              MEDIUM
            </button>
            <button
              className="btn"
              onClick={() => startTrivia(Difficulty.HARD)}
            >
              HARD
            </button>
          </div>
        ) : null}

        {!gameOver ? (
          <div className="score">
            <p>SCORE</p>
            <h3> {score}</h3>
          </div>
        ) : null}

        {loading && (
          <div className="loading-container">
            <ReactLoading type="bubbles" />
          </div>
        )}

        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <div className="btn-container">
            <button className="btn" onClick={nextQuestion}>
              NEXT
            </button>
          </div>
        ) : null}
      </Container>
    </>
  );
};

export default App;
