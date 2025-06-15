import React from 'react'

const ButtonComp = ({handleNext, selectedOption}) => {
  return (
    <div className="btn1">
        <button 
        className={selectedOption === null ? "button-disable" : "btn"} 
        onClick={handleNext}
        disabled={selectedOption === null}
        >Next Question</button>
    </div>
  )
}

export default ButtonComp