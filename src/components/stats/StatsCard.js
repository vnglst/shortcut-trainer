import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import './StatsCard.css'

const StatsCard = ({ children }) => (
  <Card className='Stats-Card'>
    <CardText>
      <h1>Stats</h1>
    </CardText>
    { children }

  </Card>
)

export default StatsCard
