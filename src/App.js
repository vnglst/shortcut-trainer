import React from 'react'
import './App.css'
import {Card, CardText} from 'material-ui/Card'
import Header from './components/header/Header'
import VisibleQuestion from './containers/VisibleQuestion'
import VisibleHistory from './containers/VisibleHistory'
import VisibleStats from './containers/VisibleStats'
import Footer from './components/footer/Footer'
import { connect } from 'react-redux'
import { addQuestion } from './actions'

const App = ({dispatch, questions, logo}) => {
  questions.forEach(question => {
    dispatch(addQuestion(question))
  })
  return (
    <div id='App'>
      <Header logo={logo} />
      <div id='Main'>
        <div className='App-Questions'>
          <Card>
            <CardText>
              <VisibleQuestion />
              <VisibleHistory />
            </CardText>
          </Card>
        </div>
        <div className='App-Stats'>
          <Card>
            <CardText>
              <h1>Stats</h1>
            </CardText>
            <VisibleStats />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default connect()(App)
