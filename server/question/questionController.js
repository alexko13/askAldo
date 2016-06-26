const Question = require('./questionModel')

const questionController = {
  getQuestions: (req, res) => {

    res.send([
      { id: 0, text: 'how far is the moon?' },
      { id: 1, text: 'hello' },
      { id: 2, text: 'who will win the election' },
      { id: 3, text: 'why am i a dog' },
    ])


    // Question
    // .find({})
    // .exec()
    // .then((questions) => {
    //   res.send(questions)
    // })
    // .catch((err) => {
    //   res.status(500)
    //   res.send(err)
    // })
  },

  postQuestion: (req, res) => {
    Question
    .create(req.body)
    .then((question) => {
      res.send(question)
    })
    .catch((err) => {
      res.status(500)
      res.send(err)
    })
  }
}

module.exports = questionController
