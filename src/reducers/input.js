const input = (state = [], action) => {
  switch (action.type) {
    case 'ADD_KEY':
      return [
        ...state,
        action.key
      ]
    case 'REMOVE_KEY':
      return state.filter(k =>
        k !== action.key
      )
    case 'TRY_AGAIN':
      return []
    case 'RESET':
      return []

    default:
      return state
  }
}

export default input
