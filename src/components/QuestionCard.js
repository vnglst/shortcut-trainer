import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import './QuestionCard.css'

const showError = (correctAnswer, userAnswer) => (
  userAnswer === correctAnswer ? false : 'Incorrect!'
)

class QuestionCard extends Component {
  render () {
    const { currentQuestion, userAnswer } = this.props
    return (
      <div className='Question-Wrapper'>
        <Paper className='Question-Card' zDepth={1}>
          <p>
            Shortcut to
            <code> {currentQuestion.q} </code>
            in memoQ?
          </p>
          <TextField
            id='user-answer'
            errorText={showError(currentQuestion.a, userAnswer)}
            value={userAnswer} />
          <div>{(currentQuestion.a === userAnswer) ? ' 👍' : ' 🤓'}</div>
        </Paper>
      </div>
    )
  }
}

export default QuestionCard
