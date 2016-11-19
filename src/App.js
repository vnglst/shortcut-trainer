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
    a: `Control + J`
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
    this.state = {
      currentQ: MEMOQ[0],
      answer: ``,
      input: {
        modifiers: [],
        key: ``
      }}
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
    console.log(nextState)
  }

  handleKeypress (e) {
    e.preventDefault()
    const input = this.state.input
    const updatedModifiers = input.modifiers.slice(0) // clone array
    if (isModifier(e.key)) updatedModifiers.push(e.key)
    const answer = inputToString(e.key, updatedModifiers)
    this.setState({
      answer,
      input: {
        modifiers: updatedModifiers,
        key: e.key
      }
    })
  }

  handleKeyRelease (e) {
    e.preventDefault()
    const input = this.state.input
    let updatedModifiers = input.modifiers.slice(0) // clone array
    if (isModifier(e.key)) updatedModifiers = removeItem(e.key, input.modifiers)
    const answer = inputToString(``, updatedModifiers)
    this.setState({
      answer,
      input: {
        modifiers: updatedModifiers,
        key: `` // key is released, so remove
      }
    })
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
        <QuestionCard
          question={this.state.currentQ}
          answer={this.state.answer} />
      </div>
    )
  }
}

export default App
