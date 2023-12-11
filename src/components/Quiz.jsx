import { useState } from "react";
import QUESTIONS from "../../questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestion = userAnswers.length;

  const handleSelectAnswer = (selectedAnser) => {
    setUserAnswers((prev) => [...prev, selectedAnser]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestion].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestion].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)} type="button">
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
