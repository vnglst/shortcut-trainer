import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import './Stats.css'

const Stats = ({ children }) => (
  <Card className='Stats'>
    <CardText>
      { children }
    </CardText>
  </Card>
)

export default Stats
