export const addKey = (key) => ({
  type: 'ADD_KEY',
  key
})

export const removeKey = (key) => ({
  type: 'REMOVE_KEY',
  key
})

let nextQuestionId = 0
export const addQuestion = (q, a) => ({
  type: 'ADD_QUESTION',
  id: nextQuestionId++,
  q,
  a
})

export const setCurrentQuestion = (id) => ({
  type: 'SET_CURRENT_QUESTION',
  id
})
