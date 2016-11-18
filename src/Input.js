import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import './Input.css'

const showError = (question, answer) => (
  question === answer ? false : 'Incorrect!'
)

class Input extends Component {
  render () {
    return (
      <div className='row middle-xs center-xs Input'>
        <Paper className='Question-paper' zDepth={1}>
          <TextField
            id='question'
            errorText={showError(this.props.question, this.props.keysString)}
            value={this.props.keysString} />
          <div>{(this.props.question === this.props.keysString) ? ' 👍' : ' 🤓'}</div>
        </Paper>
      </div>
    )
  }
}

export default Input
