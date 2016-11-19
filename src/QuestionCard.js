import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import './QuestionCard.css'

const showError = (question, answer) => (
  question === answer ? false : 'Incorrect!'
)

class Input extends Component {
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
          errorText={showError(this.props.question.a, this.props.answer)}
          value={this.props.answer} />
        <div>{(this.props.question.a === this.props.answer) ? ' 👍' : ' 🤓'}</div>
      </Paper>
    )
  }
}

export default Input
