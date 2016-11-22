import React, {Component} from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import ShowQuestion from './ShowQuestion'
import './QuestionCard.css'
import { addKey, removeKey, answerQuestion } from '../actions'

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
    this.dispatch(addKey(e.key))
  }

  handleKeyRelease (e) {
    e.preventDefault()
    const { currentQuestion, userAnswer } = this.props
    if (userAnswer === currentQuestion.a) {
      this.dispatch(answerQuestion(currentQuestion.id, userAnswer))
    }
    this.dispatch(removeKey(e.key))
  }

  render () {
    const { currentQuestion, userAnswer } = this.props
    return (
      <div className='Question-Wrapper'>
        <Paper className='Question-Card' zDepth={1}>
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
        </Paper>
      </div>
    )
  }
}

export default connect()(ShowQuestion(QuestionCard))
