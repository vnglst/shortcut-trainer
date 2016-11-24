import React from 'react'
import {CardActions} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import LinearProgress from 'material-ui/LinearProgress'
import './Stats.css'

const Stats = ({ completed, total, correct, mistakes, tryAgain }) => (
  <div>
    <List>
      <ListItem disabled primaryText={`Completed: ${completed}/${total}`} />
      <ListItem disabled primaryText={`Correct: ${correct}/${completed}`} />
      <ListItem disabled primaryText={`Mistakes: ${mistakes}/${completed}`} />
    </List>
    <div className='Stats-Progress'>
      <LinearProgress mode='determinate' value={(completed / total * 100).toFixed(2)} />
    </div>
    <CardActions>
      <FlatButton label='Try again' secondary onClick={tryAgain} disabled={completed !== total} />
    </CardActions>
  </div>
)

export default Stats
