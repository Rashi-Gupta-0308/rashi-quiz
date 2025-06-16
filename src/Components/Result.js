import React from 'react'

const Result = ({score, total}) => {
  return (
    <>
      <div id="result">Your Score is : {score}/{total}</div>
      <div className="progress">Correct Answers : {score}</div>
      <div className="progress">Wrong Answers : {total - score}</div>
    </>
  )
}

export default Result