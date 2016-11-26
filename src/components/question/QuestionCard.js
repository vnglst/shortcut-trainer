import React from 'react'
import {Card, CardText} from 'material-ui/Card'

const QuestionCard = ({ children }) => (
  <Card>
    <CardText>
      { children }
    </CardText>
  </Card>
)

export default QuestionCard
