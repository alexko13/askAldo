import { SELECT_QUESTION } from '../actions'

const activeQuestionReducer = (state = null, action) => {
  switch(action.type) {
    case SELECT_QUESTION:
      return action.payload
    default:
      return state
  }
}

export default activeQuestionReducer
