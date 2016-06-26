import { combineReducers } from 'redux'
import QuestionReducer from './QuestionReducer'
import ActiveQuestionReducer from './ActiveQuestionReducer'

const rootReducer = combineReducers({
  questions: QuestionReducer,
  activeQuestion: ActiveQuestionReducer
})

export default rootReducer
