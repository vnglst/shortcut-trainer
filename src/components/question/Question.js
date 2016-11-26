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

const Question = ({dispatch, currentQuestion, userAnswer, addKey, removeKey, answerQuestion, reset}) => {
  const handleKeypress = (e) => {
    e.preventDefault()
    addKey(e.key)
  }

  const handleKeyRelease = (e) => {
    e.preventDefault()
    if (!isModifier(e.key)) {
      answerQuestion(currentQuestion.id, userAnswer)
    }
    removeKey(e.key)
  }

  const questionString = "What's the keyboard shortcut for:"
  return (
    <div>
      <p>{questionString}</p>
      <TextField
        id='user-answer'
        autoFocus
        floatingLabelText={currentQuestion.q}
        value={userAnswer}
        onKeyDown={handleKeypress}
        onKeyUp={handleKeyRelease}
        onBlur={reset} />
    </div>
  )
}

export default ShowQuestion(Question)
