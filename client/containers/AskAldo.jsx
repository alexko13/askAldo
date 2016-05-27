import React, { Component } from 'react';
import AskForm from '../components/AskForm';
import QuestionFeed from '../components/QuestionFeed';

class AskAldo extends Component {
  constructor() {
    super();
    this.onAskChange = this.onAskChange.bind(this);
    this.onAskSubmit = this.onAskSubmit.bind(this);
    this.state = {
      ask: '',
      questions: [],
    }
  }

  onAskSubmit(e) {
    e.preventDefault();
    this.setState({
      questions: this.state.questions.concat([{
        text: this.state.ask,
        date: Date.now(),
      }])
    })
  }

  onAskChange(e) {
    this.setState({
      ask: e.target.value,
    })
  }

  render () {
    return (
      <div>
        <AskForm
          onAskChange={this.onAskChange}
          onAskSubmit={this.onAskSubmit}
          ask={this.state.ask}
        />
        <QuestionFeed
          questions={this.state.questions}
          orderBy="date"
        />
      </div>
    )
  }
}

export default AskAldo;
