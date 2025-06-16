import React from 'react';

const Options = ({ current, selectedOption, setSelectedOption, setScore }) => {

  const handleClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      if (option === current.answer) {
        setScore(prev => prev + 1);
      }
    }
  };

  return (
    <div className="optionMainDiv">
      {current.options.map((option, index) => (
        <div
          key={index}
          className={`optionDiv ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleClick(option)}>
          <h3>{option}</h3>
        </div>
      ))}
    </div>
  );
};

export default Options;
