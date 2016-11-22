import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

class QuestionInfo extends Component {

  render () {
    const { question } = this.props
    return (
      <div className='Info-Wrapper'>
        <Paper className='Question-Info' zDepth={1}>
          <p>Question: <code> {question.q} </code></p>
          <p>User answered: <code> {question.userAnswer} </code></p>
          <p>Correct answer: <code> {question.a} </code></p>
          <div>{(question.a === question.userAnswer) ? ' 👍' : ' 🤓'}</div>
        </Paper>
      </div>
    )
  }
}

export default QuestionInfo
