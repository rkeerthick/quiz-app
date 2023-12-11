import React from 'react'
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

const Question = ({text, answers, onSelectAnswer, answerState, selectedAnswer, onSkipAnswer}) => {
    return (
      <div id="question">
        <QuestionTimer
          timeout={15000}
          onTimeOut={onSkipAnswer}
        />
        <h2>{text}</h2>
        <Answers
          answer={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    );
}

export default Question