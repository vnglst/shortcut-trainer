import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import ShowQuestion from './ShowQuestion'
import './QuestionCard.css'

const isModifier = (key) => {
  const modifiers = [
    'Shift',
    'Control',
    'Meta',
    'Alt'
  ]
  return modifiers.indexOf(key) !== -1
}

const showError = (correctAnswer, userAnswer) => (
  userAnswer === correctAnswer ? false : 'Incorrect!'
)

class QuestionCard extends Component {

  constructor (props) {
    super(props)
    this.dispatch = this.props.dispatch
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleKeyRelease = this.handleKeyRelease.bind(this)
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeypress)
    window.addEventListener('keyup', this.handleKeyRelease)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeypress)
    window.removeEventListener('keyup', this.handleKeyRelease)
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
    const { currentQuestion, userAnswer } = this.props
    return (
      <div className='Question-Wrapper'>
        <p>
          Shortcut to
          <code> {currentQuestion.q} </code>
          in memoQ?
        </p>
        <TextField
          id='user-answer'
          errorText={showError(currentQuestion.a, userAnswer)}
          value={userAnswer} />
        <div>{(currentQuestion.a === userAnswer) ? ' 👍' : ' 🤓'}</div>
      </div>
    )
  }
}

export default ShowQuestion(QuestionCard)
