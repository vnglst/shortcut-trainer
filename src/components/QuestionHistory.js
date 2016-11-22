import React, {Component} from 'react'
import QuestionInfo from './QuestionInfo'

class QuestionHistory extends Component {
  render () {
    const { questions } = this.props
    const questionsList = questions.map((q, i) => {
      return <QuestionInfo key={i} question={q} />
    })
    return (
      <div>
        { questionsList }
      </div>
    )
  }
}

export default QuestionHistory
