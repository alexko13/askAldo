import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import questionsReducer from './questionsReducer'
import activeQuestionReducer from './activeQuestionReducer'

const rootReducer = combineReducers({
  form: formReducer,
  questions: questionsReducer,
  activeQuestion: activeQuestionReducer,
})

export default rootReducer
