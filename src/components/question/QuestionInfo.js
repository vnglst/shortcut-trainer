import React, {Component} from 'react'
import './QuestionInfo.css'

class QuestionInfo extends Component {

  render () {
    const { question } = this.props
    return (
      <div className='Info-Wrapper'>
        <p>Question: <code> {question.q} </code></p>
        <p>User answered: <code> {question.userAnswer} </code></p>
        <p>Correct answer: <code> {question.a} </code></p>
        <div>{(question.a === question.userAnswer) ? 'Good work! 👍' : 'Keep on studying 🤓'}</div>
      </div>
    )
  }
}

export default QuestionInfo
