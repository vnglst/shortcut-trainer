import React from 'react'
import './App.css'
import Header from './components/header/Header'
import QuestionCard from './components/question/QuestionCard'
import VisibleInput from './containers/VisibleInput'
import VisibleHistory from './containers/VisibleHistory'
import StatsCard from './components/stats/StatsCard'
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
          <QuestionCard>
            <VisibleInput />
            <VisibleHistory />
          </QuestionCard>
        </div>
        <div className='App-Stats'>
          <StatsCard>
            <VisibleStats />
          </StatsCard>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default connect()(App)
