import React from 'react'

const QuizList = ({current}) => {
  return (
    <>
        <h2>{current.question}</h2>
        <hr />
    </>
  )
}

export default QuizList