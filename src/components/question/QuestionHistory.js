import React from 'react'
import QuestionInfo from './QuestionInfo'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import './QuestionHistory.css'

const QuestionHistory = ({questions}) => {
  const questionsList = questions.map((q, i) => {
    return <QuestionInfo key={i} question={q} />
  })
  return (
    <div className='Question-List'>
      <Divider />
      <List>
        <Subheader>Previous shortcuts</Subheader>
        { questionsList }
      </List>
    </div>
  )
}

export default QuestionHistory
