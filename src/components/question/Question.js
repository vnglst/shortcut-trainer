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

const isMobile = () => {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true
  } else {
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
        floatingLabelText={!isMobile() && currentQuestion.q}
        value={userAnswer}
        onKeyDown={handleKeypress}
        onKeyUp={handleKeyRelease}
        onBlur={reset}
        disabled={isMobile()}
        errorText={isMobile() && errorText} />
    </div>
  )
}

export default ShowQuestion(Question)
