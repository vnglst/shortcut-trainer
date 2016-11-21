import React, {Component} from 'react'
import './App.css'
import VisibleInput from './containers/VisibleInput'
import Header from './components/Header'
import { connect } from 'react-redux'
import { addQuestion, setCurrentQuestion } from './actions'

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
  },
  {
    q: `Add term`,
    a: `Control + i`
  }
]

class App extends Component {

  constructor (props) {
    super(props)
    this.dispatch = this.props.dispatch
    MEMOQ.forEach(el => {
      this.dispatch(addQuestion(el.q, el.a))
    })
    this.dispatch(setCurrentQuestion(2))
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
