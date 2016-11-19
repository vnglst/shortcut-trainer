import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import './QuestionCard.css'

const showError = (correctAnswer, userAnswer) => (
  userAnswer === correctAnswer ? false : 'Incorrect!'
)

class QuestionCard extends Component {
  render () {
    return (
      <Paper className='Question-Card' zDepth={1}>
        <p>
          Shortcut to
          <code> {this.props.question.q} </code>
          in memoQ?
        </p>
        <TextField
          id='user-answer'
          errorText={showError(this.props.question.a, this.props.userAnswer)}
          value={this.props.userAnswer} />
        <div>{(this.props.question.a === this.props.userAnswer) ? ' 👍' : ' 🤓'}</div>
      </Paper>
    )
  }
}

export default QuestionCard
