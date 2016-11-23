import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
// Database of questions
import MEMOQ from './data/MEMOQ.json'

const logger = store => next => action => {
  // console.log('dispatching', action)
  let result = next(action)
  // console.log('next state', store.getState())
  return result
}

const store = createStore(reducer,
  applyMiddleware(logger)
)

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App questions={MEMOQ} />
    </Provider>
  </MuiThemeProvider>
)

export default Root
