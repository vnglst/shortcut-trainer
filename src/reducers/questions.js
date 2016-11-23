const question = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        id: action.question.id || action.id,
        q: action.question.q,
        a: action.question.a,
        completed: action.question.completed || false,
        userAnswer: action.question.userAnswer || ''
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
    case 'TRY_AGAIN':
      if (!state.completed) {
        return state
      }

      return {
        ...state,
        completed: false,
        userAnswer: ''
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
    case 'TRY_AGAIN':
      return {
        ...state,
        list: state.list.map(q => question(q, action))
      }
    default:
      return state
  }
}

export default questions
