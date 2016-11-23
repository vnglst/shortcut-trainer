import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import './QuestionCard.css'

const Input = ({ children }) => (
  <Card className='Question-Wrapper' >
    <CardText>
      { children }
    </CardText>
  </Card>
)

export default Input
