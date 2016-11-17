import React, {Component} from 'react'
import logo from './memoq-logo.png'
import './App.css'
import Input from './Input'

const MODIFIERS = [
  `Shift`,
  `Control`,
  `Alt`,
  `Meta`
]

const MEMOQ = [
  {
    q: `Comfirm segment`,
    a: `Control + Enter`
  }
]

// Checks if key is a modifier key, like ctrl
const isModifier = (key) => {
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
const keysToString = (key, modifiers) => {
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
      question: MEMOQ[0].a,
      keysPressed: {
        modifiers: [],
        key: ``,
        keysString: ``
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

  handleKeypress (e) {
    e.preventDefault()
    const modifiers = this.state.keysPressed.modifiers
    const key = e.key
    if (isModifier(key)) modifiers.push(key)
    const keysString = keysToString(key, modifiers)
    this.setState({
      keysPressed: {
        modifiers,
        key,
        keysString
      }})
  }

  handleKeyRelease (e) {
    e.preventDefault()
    let key = e.key
    let modifiers = this.state.keysPressed.modifiers
    if (isModifier(key)) modifiers = removeItem(key, modifiers)
    // Key is released, so remove it from display
    key = ``
    const keysString = keysToString(``, modifiers)
    this.setState({
      keysPressed: {
        modifiers,
        key,
        keysString
      }})
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
        <p className='App-intro'>
          Quick! What's the shortcut to
          <code> {MEMOQ[0].q} </code>
          in memoQ?
        </p>
        <Input
          question={this.state.question}
          keysString={this.state.keysPressed.keysString} />
      </div>
    )
  }
}

export default App
