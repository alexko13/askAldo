import axios from 'axios'

const questionHelpers = {
  getQuestions: (callback) => {
    axios.get('/api/question')
    .then((res) => {
      callback(res.data)
    })
    .catch((res) => {
      console.log(res)
    })
  },

  postQuestion: (question, callback) => {
    axios.post('/api/question', {
      text: question
    })
    .then((res) => {
      callback(res.data)
    })
    .catch((res) => {
      console.log(res)
    })
  }
}

export default questionHelpers
