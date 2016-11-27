import { Router, Route, browserHistory } from 'react-router'
import React from 'react'
import App from './App'
// Database of questions
import MEMOQ from './data/MEMOQ.json'
import WORD from './data/WORD.json'
import logoMemoQ from './images/memoq-logo.png'
import logoWord from './images/word-logo.png'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={() => (<App questions={MEMOQ} logo={logoMemoQ} />)} />
      <Route path='/word' component={() => (<App questions={WORD} logo={logoWord} />)} />
    </Router>
  )
}

export default Routes
