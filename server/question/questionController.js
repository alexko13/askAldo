const Question = require('./questionModel');

const questionController = {
  getQuestions: (req, res) => {
    Question
    .find({})
    .exec()
    .then((questions) => {
      res.send(questions);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
  },

  postQuestion: (req, res) => {
    Question
    .create(req.body)
    .then((question) => {
      res.send(question);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
  }
}

module.exports = questionController;
