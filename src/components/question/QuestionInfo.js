import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
import {red500, greenA200} from 'material-ui/styles/colors'
import './QuestionInfo.css'

class QuestionInfo extends Component {

  render () {
    const { question } = this.props
    const correctAnswer = question.a === question.userAnswer
    let info = <span>{question.q + ` - `}
      <span className={correctAnswer ? 'right' : 'wrong'}>
        {question.userAnswer}
      </span>
      <span className='right'>
        {correctAnswer ? '' : ' - ' + question.a}
      </span>
    </span>
    return (
      <ListItem disabled primaryText={info} rightIcon={correctAnswer ? <ThumbUp color={greenA200} /> : <ThumbDown color={red500} />} />
    )
  }
}

export default QuestionInfo
