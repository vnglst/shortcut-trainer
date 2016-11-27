import React from 'react'
import TextField from 'material-ui/TextField'
import ShowQuestion from './ShowQuestion'

const isModifier = (key) => {
  const modifiers = [
    'Shift',
    'Control',
    'Meta',
    'Alt'
  ]
  return modifiers.indexOf(key) !== -1
}

// Tests is device has touch support. If so => probably virtual keyboard.
const hasTouch = () => {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch (e) {
    return false
  }
}

const Question = ({currentQuestion, userAnswer, addKey, removeKey, answerQuestion, reset}) => {
  const handleKeypress = (e) => {
    e.preventDefault()
    addKey(e.key)
  }

  const handleKeyRelease = (e) => {
    e.preventDefault()
    removeKey(e.key)
    if (!isModifier(e.key)) {
      answerQuestion(currentQuestion.id, userAnswer)
    }
  }

  const questionString = "What's the keyboard shortcut for:"
  const errorText = "Doesn't work on mobile yet!"
  return (
    <div>
      <p>{questionString}</p>
      <TextField
        id='user-answer'
        autoFocus
        floatingLabelText={!hasTouch() && currentQuestion.q}
        value={userAnswer}
        onKeyDown={handleKeypress}
        onKeyUp={handleKeyRelease}
        onBlur={reset}
        disabled={hasTouch()}
        errorText={hasTouch() && errorText} />
    </div>
  )
}

export default ShowQuestion(Question)
