import React from 'react'
import QuestionCard from './QuestionCard'

const renderPrevQuestions = (prevQuestions) => {
  if (prevQuestions.length > 0) {
    return prevQuestions.map((q, index) => (
      <QuestionCard
        key={index}
        question={q}
        userAnswer={q.userAnswer} />
    ))
  } else return []
}

const PrevQuestions = ({prevQuestions}) => {
  return (
    <div>
      {renderPrevQuestions(prevQuestions)}
    </div>
  )
}

export default PrevQuestions
