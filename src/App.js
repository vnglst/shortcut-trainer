import React, {Component} from 'react'
import './App.css'
import VisibleInput from './containers/VisibleInput'
import VisibleHistory from './containers/VisibleHistory'
import Header from './components/header/Header'
import Input from './components/question/Input'
import Stats from './components/stats/Stats'
import { connect } from 'react-redux'
import { addQuestion } from './actions'

class App extends Component {

  constructor (props) {
    super(props)
    this.dispatch = this.props.dispatch
    const questions = this.props.questions
    // Load questions
    questions.forEach(question => {
      this.dispatch(addQuestion(question))
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <div className='Content'>
          <Input>
            <VisibleInput />
            <VisibleHistory />
          </Input>
          <Stats>
            <h1>Stats</h1>
          </Stats>
        </div>
      </div>
    )
  }
}

export default connect()(App)
