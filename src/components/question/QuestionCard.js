import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import './QuestionCard.css'

const QuestionCard = ({ children }) => (
  <Card className='Question-Card'>
    <CardText>
      { children }
    </CardText>
  </Card>
)

export default QuestionCard
