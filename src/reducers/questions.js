const question = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        id: action.id,
        q: action.q,
        a: action.a,
        completed: false
      }
    case 'ANSWER_QUESTION':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: true,
        userAnswer: action.answer
      }
    default:
      return state
  }
}

const questions = (state = { current: 0, list: [] }, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        ...state,
        list: [
          ...state.list,
          question(undefined, action)
        ]
      }
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        current: action.id
      }
    case 'ANSWER_QUESTION':
      return {
        ...state,
        list: state.list.map(q => question(q, action))
      }
    default:
      return state
  }
}

export default questions
