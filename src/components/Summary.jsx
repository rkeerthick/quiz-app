import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../../questions";

const Summary = ({ answers }) => {
  const skippedAnswer = answers.filter((ans) => ans === null);
  const correctAnswer = answers.filter(
    (ans, index) => ans === QUESTIONS[index].answers[0]
  );

  const skippedAnswerPerc = Math.round((skippedAnswer.length / 6) * 100);
  const correctAnswerPerc = Math.round((correctAnswer.length / 6) * 100);
  const wrongAnswerPerc = 100 - skippedAnswerPerc - correctAnswerPerc;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPerc}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPerc}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerPerc}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ? answer : "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
