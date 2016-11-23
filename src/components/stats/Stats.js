import React from 'react'
import {List, ListItem} from 'material-ui/List'
// import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
// import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
// import {red500, greenA200} from 'material-ui/styles/colors'

const Stats = ({ completed }) => (
  <List>
    <ListItem primaryText={'Completed: ' + completed} />
  </List>
)

export default Stats
