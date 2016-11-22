import React, {Component} from 'react'
import './App.css'
import VisibleInput from './containers/VisibleInput'
import VisibleHistory from './containers/VisibleHistory'
import Header from './components/Header'
import { connect } from 'react-redux'
import { addQuestion } from './actions'
// Database of questions
import MEMOQ from './data/MEMOQ.json'

class App extends Component {

  constructor (props) {
    super(props)
    this.dispatch = this.props.dispatch
    // Load questions
    MEMOQ.forEach(el => {
      this.dispatch(addQuestion(el.q, el.a))
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <VisibleInput />
        <VisibleHistory />
      </div>
    )
  }
}

export default connect()(App)
