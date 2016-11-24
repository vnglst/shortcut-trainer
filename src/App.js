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
    <div className='App'>
      <Header logo={logo} />
      <div className='Content'>
        <QuestionCard>
          <VisibleInput />
          <VisibleHistory />
        </QuestionCard>
        <StatsCard>
          <VisibleStats />
        </StatsCard>
      </div>
      <Footer />
    </div>
  )
}

export default connect()(App)
