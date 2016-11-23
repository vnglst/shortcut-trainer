import React from 'react'
import {List, ListItem} from 'material-ui/List'

const Stats = ({ completed, total, correct, mistakes }) => (
  <List className='Stats-List'>
    <ListItem disabled primaryText={`Completed: ${completed}/${total}`} />
    <ListItem disabled primaryText={`Correct: ${correct}/${completed}`} />
    <ListItem disabled primaryText={`Mistakes: ${mistakes}/${completed}`} />
  </List>
)

export default Stats
