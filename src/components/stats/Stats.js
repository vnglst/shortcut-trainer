import React from 'react'
import {CardActions} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'

const Stats = ({ completed, total, correct, mistakes, tryAgain }) => (
  <div>
    <List className='Stats-List'>
      <ListItem disabled primaryText={`Completed: ${completed}/${total}`} />
      <ListItem disabled primaryText={`Correct: ${correct}/${completed}`} />
      <ListItem disabled primaryText={`Mistakes: ${mistakes}/${completed}`} />
    </List>
    <Divider />
    <CardActions>
      <FlatButton label='Try again' primary onClick={tryAgain} />
    </CardActions>
  </div>
)

export default Stats
