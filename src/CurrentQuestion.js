import React from 'react'
import QuestionCard from './QuestionCard'
import Paper from 'material-ui/Paper'
import './CurrentQuestion.css'

const CurrentQuestion = ({questions, userAnswer}) => {
  const openQuestions = questions.filter((q) => (!q.done))
  if (openQuestions.length > 0) {
    const currentQuestion = openQuestions[0]
    return (
      <QuestionCard
        question={currentQuestion}
        userAnswer={userAnswer} />
    )
  } else {
    return (
      <div className='Current-Question-Wrapper'>
        <Paper className='No-Questions-Card' zDepth={1}>
          <p>No more questions</p>
        </Paper>
      </div>
    )
  }
}

export default CurrentQuestion
