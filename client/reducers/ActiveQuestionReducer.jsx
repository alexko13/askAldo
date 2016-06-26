// not application state, only the peice this is responsible for
const ActiveQuestionReducer = (state = null, action) => {
  switch(action.type) {
    case 'QUESTION_SELECTED':
      return action.payload
  }

  return state
}

export default ActiveQuestionReducer
