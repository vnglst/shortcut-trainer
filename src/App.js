import React, {Component} from 'react'
import logo from './memoq-logo.png'
import './App.css'
import CurrentQuestion from './CurrentQuestion'
import CompletedQuestions from './CompletedQuestions'

// Database of questions
const MEMOQ = [
  {
    q: `Confirm segment`,
    a: `Control + Enter`
  },
  {
    q: `Merge two segments`,
    a: `Control + t`
  },
  {
    q: `Split a segment`,
    a: `Control + j`
  }
]

// Checks if key is a modifier key, like ctrl
const isModifier = (key) => {
  const MODIFIERS = [
    `Shift`,
    `Control`,
    `Alt`,
    `Meta`
  ]
  return MODIFIERS.indexOf(key) !== -1
}

// Removes an item from an array
const removeItem = (item, array) => (
  array.filter((i) => {
    return i !== item
  }
 )
)

// Creates a string from keys pressed
const inputToString = (key, modifiers) => {
  let keyStr = key
  if (isModifier(key)) keyStr = ``
  let modifierStr = modifiers.join(` + `)
  if (modifiers.length > 0) modifierStr += ` + `
  return modifierStr + keyStr
}

class App extends Component {

  constructor (props) {
    super(props)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleKeyRelease = this.handleKeyRelease.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    const questions = MEMOQ.slice(0)
    this.state = {
      questions,
      userAnswer: ``,
      input: {
        modifiers: [],
        key: ``
      }
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeypress)
    window.addEventListener('keyup', this.handleKeyRelease)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeypress)
    window.removeEventListener('keyup', this.handleKeyRelease)
  }

  componentWillUpdate (nextProps, nextState) {
    // console.log(nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    // const currentQuestion = this.state.currentQuestion
    // if (currentQuestion.a === this.state.userAnswer) {
    //   this.state.prevQuestions.push({
    //     q: currentQuestion.q,
    //     a: currentQuestion.a,
    //     userAnswer: this.state.userAnswer
    //   })
    //   this.setState({
    //     currentQuestion: this.state.questions.pop()
    //   })
    // }
  }

  handleKeypress (e) {
    e.preventDefault()
    const input = this.state.input
    const updatedModifiers = input.modifiers.slice(0)
    if (isModifier(e.key)) updatedModifiers.push(e.key)
    const userAnswer = inputToString(e.key, updatedModifiers)
    this.setState({
      userAnswer,
      input: {
        modifiers: updatedModifiers,
        key: e.key
      }
    })
    this.checkAnswer()
  }

  handleKeyRelease (e) {
    e.preventDefault()
    const input = this.state.input
    let updatedModifiers = input.modifiers.slice(0)
    if (isModifier(e.key)) updatedModifiers = removeItem(e.key, input.modifiers)
    const userAnswer = inputToString(``, updatedModifiers)
    this.setState({
      userAnswer,
      input: {
        modifiers: updatedModifiers,
        key: `` // key is released, so remove
      }
    })
  }

  checkAnswer () {
    const questions = this.state.questions
    const openQuestions = questions.filter((q) => (!q.done))
    // Do nothing if all questions answered
    if (!openQuestions) return
    // Else, get current question
    const currentQuestion = openQuestions[0]
    const questionIndex = questions.findIndex((q) => (q.a === currentQuestion.a))
    if (this.state.userAnswer === currentQuestion.a) {
      let updatedQuestions = questions.slice(0)
      updatedQuestions[questionIndex].done = true
      this.setState({
        questions: updatedQuestions
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>
            Shortcut Trainer
          </h2>
        </div>
        <CurrentQuestion
          questions={this.state.questions}
          userAnswer={this.state.userAnswer}
          />
        <CompletedQuestions questions={this.state.questions} />
      </div>
    )
  }
}

export default App
