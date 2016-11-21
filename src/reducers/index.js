import { combineReducers } from 'redux'
import input from './input'
import questions from './questions'

const shortcutApp = combineReducers({
  input,
  questions
})

export default shortcutApp
