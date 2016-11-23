import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import './QuestionWrapper.css'

const Input = ({ children }) => (
  <Card className='Input' >
    <CardText>
      { children }
    </CardText>
  </Card>
)

export default Input
