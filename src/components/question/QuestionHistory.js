import React, {Component} from 'react'
import QuestionInfo from './QuestionInfo'
import {List} from 'material-ui/List'

class QuestionHistory extends Component {
  render () {
    const { questions } = this.props
    const questionsList = questions.map((q, i) => {
      return <QuestionInfo key={i} question={q} />
    })
    return (
      <List>
        { questionsList }
      </List>
    )
  }
}

export default QuestionHistory
