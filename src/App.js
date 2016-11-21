import React, {Component} from 'react'
import './App.css'
import VisibleInput from './containers/VisibleInput'
import Header from './components/Header'
import { connect } from 'react-redux'
import { addKey, removeKey, addQuestion, setCurrentQuestion } from './actions'

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

class App extends Component {

  constructor (props) {
    super(props)
    this.dispatch = this.props.dispatch
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleKeyRelease = this.handleKeyRelease.bind(this)
    this.dispatch(addQuestion(MEMOQ[0].q, MEMOQ[0].a))
    this.dispatch(addQuestion(MEMOQ[1].q, MEMOQ[1].a))
    this.dispatch(addQuestion(MEMOQ[2].q, MEMOQ[2].a))
    this.dispatch(setCurrentQuestion(2))
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
    this.dispatch(removeKey(e.key))
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <VisibleInput />
      </div>
    )
  }
}

export default connect()(App)
