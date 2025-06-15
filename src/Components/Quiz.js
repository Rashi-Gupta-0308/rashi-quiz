import React, { useState } from 'react';
import QuizList from './QuizList';
import ButtonComp from './ButtonComp';
import Options from './Options';
import quizQuestions from './questions';
import Result from './Result';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false); 

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true); 
    }
  };

  const current = quizQuestions[currentQuestionIndex];

  return (
    <div id="centreDiv">
      <h1>Quiz App</h1>

      {showResult ? (
        <Result score={score} total={quizQuestions.length} />
      ) : (
        <>
          <h4>
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </h4>
          <QuizList current={current} />
          <Options
            current={current}
            score={score}
            setScore={setScore}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <ButtonComp
            current={current}
            handleNext={handleNext}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
