import axios from 'axios'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const fetchQuestions = () => {
  return {
    type: FETCH_QUESTIONS,
    payload: axios.get('/api/question/'),
  }
}

export const SELECT_QUESTION = 'SELECT_QUESTION'
export const selectQuestion = (question) => {
  return {
    type: SELECT_QUESTION,
    payload: question,
  }
}

export const CREATE_QUESTION = 'CREATE_QUESTION'
export const createQuestion = (formValues) => {
  return {
    type: CREATE_QUESTION,
    payload: axios.post('/api/question/', formValues),
  }
}
