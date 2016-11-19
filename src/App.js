import React, {Component} from 'react'
import logo from './memoq-logo.png'
import './App.css'
import QuestionCard from './QuestionCard'

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

const renderPrevQuestions = (prevQuestions) => {
  if (prevQuestions.length > 0) {
    return prevQuestions.map((q, index) => (
      <QuestionCard
        key={index}
        question={q}
        userAnswer={q.userAnswer} />
    ))
  } else return []
}

class App extends Component {

  constructor (props) {
    super(props)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleKeyRelease = this.handleKeyRelease.bind(this)
    const questions = MEMOQ.slice(0) // clone array
    const currentQuestion = questions.pop()
    this.state = {
      currentQuestion,
      questions,
      userAnswer: ``,
      input: {
        modifiers: [],
        key: ``
      },
      prevQuestions: []
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
    const currentQuestion = this.state.currentQuestion
    if (currentQuestion.a === this.state.userAnswer) {
      this.state.prevQuestions.push({
        q: currentQuestion.q,
        a: currentQuestion.a,
        userAnswer: this.state.userAnswer
      })
      this.setState({
        currentQuestion: this.state.questions.pop()
      })
    }
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

  render () {
    const prevQuestions = renderPrevQuestions(this.state.prevQuestions)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>
            Shortcut Trainer
          </h2>
        </div>
        <QuestionCard
          question={this.state.currentQuestion}
          userAnswer={this.state.userAnswer} />
        {prevQuestions}
      </div>
    )
  }
}

export default App
