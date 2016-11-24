import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import ShowQuestion from './ShowQuestion'
import './Question.css'

const isModifier = (key) => {
  const modifiers = [
    'Shift',
    'Control',
    'Meta',
    'Alt'
  ]
  return modifiers.indexOf(key) !== -1
}

class Question extends Component {

  constructor (props) {
    super(props)
    this.dispatch = this.props.dispatch
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleKeyRelease = this.handleKeyRelease.bind(this)
  }

  handleKeypress (e) {
    e.preventDefault()
    this.props.addKey(e.key)
  }

  handleKeyRelease (e) {
    e.preventDefault()
    const { currentQuestion, userAnswer, removeKey, answerQuestion } = this.props
    if (!isModifier(e.key)) {
      answerQuestion(currentQuestion.id, userAnswer)
    }
    removeKey(e.key)
  }

  render () {
    const { currentQuestion, userAnswer, reset } = this.props
    const questionString = "What's the keyboard shortcut for:"
    return (
      <div className='Question'>
        <p>{questionString}</p>
        <TextField
          id='user-answer'
          autoFocus
          floatingLabelText={currentQuestion.q}
          value={userAnswer}
          onKeyDown={this.handleKeypress}
          onKeyUp={this.handleKeyRelease}
          onBlur={reset} />
      </div>
    )
  }
}

export default ShowQuestion(Question)
