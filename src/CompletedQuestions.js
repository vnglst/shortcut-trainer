import React from 'react'
import QuestionCard from './QuestionCard'

const renderCompleted = (completedQuestions) => completedQuestions.map((q, i) => (
  <QuestionCard
    key={i}
    question={q}
    userAnswer={q.userAnswer} />
  )
)

const CompletedQuestions = ({questions}) => {
  const completedQuestions = questions.filter((q) => (q.done))
  if (completedQuestions.length > 0) {
    return (
      <div>
        {renderCompleted(completedQuestions)}
      </div>
    )
  } else {
    return (
      <div>
        <p>No completed questions</p>
      </div>
    )
  }
}

export default CompletedQuestions
