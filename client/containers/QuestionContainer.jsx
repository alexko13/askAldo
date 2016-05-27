import React, { Component } from 'react';
import QuestionForm from '../components/QuestionForm';


class QuestionContainer extends Component {
  constructor() {
    super();
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
    this.state = {
      question: ''
    }
  }

  onQuestionSubmit(e) {
    e.preventDefault();
    console.log(this.state.question);
  }

  onQuestionChange(e) {
    this.setState({
      question: e.target.value,
    })
  }

  render () {
    return (
      <div>
        <QuestionForm
          onQuestionChange={this.onQuestionChange}
          onQuestionSubmit={this.onQuestionSubmit}
          question={this.question}
        />
      </div>
    )
  }
}

export default QuestionContainer;
