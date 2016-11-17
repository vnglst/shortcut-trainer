import React, {Component} from 'react'
import './Input.css'

class Input extends Component {
  render () {
    return (
      <div className='Input'>
        <input
          type='text'
          disabled='disabled'
          className={(this.props.question === this.props.keysString) ? 'correctAnswer' : 'incorrectAnswer'}
          value={this.props.keysString} />
        <span>{(this.props.question === this.props.keysString) ? ' 👍' : ' 🤓'}</span>
      </div>
    )
  }
}

export default Input
