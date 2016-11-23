import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
// import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
// import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
// import {red500, greenA200} from 'material-ui/styles/colors'
import './Stats.css'

const Stats = ({ completed }) => (
  <Card className='Stats'>
    <CardText>
      <h1>Stats</h1>
    </CardText>
    <List>
      <ListItem primaryText={'Completed: ' + completed} />
    </List>
  </Card>
)

export default Stats
