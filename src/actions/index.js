export const addKey = (key) => ({
  type: 'ADD_KEY',
  key
})

export const removeKey = (key) => ({
  type: 'REMOVE_KEY',
  key
})

export const reset = (key) => ({
  type: 'RESET'
})

let nextQuestionId = 0
export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  id: nextQuestionId++,
  question
})

export const setCurrentQuestion = (id) => ({
  type: 'SET_CURRENT_QUESTION',
  id
})

export const answerQuestion = (id, answer) => (
  {
    type: 'ANSWER_QUESTION',
    id,
    answer
  }
)

export const tryAgain = () => (
  {
    type: 'TRY_AGAIN'
  }
)
