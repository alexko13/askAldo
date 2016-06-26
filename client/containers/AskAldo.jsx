import React, { Component } from 'react'
import AskForm from '../components/AskForm'
import QuestionFeed from '../components/QuestionFeed'
import questionHelpers from '../util/questionHelpers'

class AskAldo extends Component {
  constructor(props) {
    super(props)
    this.onAskChange = this.onAskChange.bind(this)
    this.onAskSubmit = this.onAskSubmit.bind(this)
    this.state = {
      ask: '',
      questions: [],
    }
  }

  componentDidMount() {
    // Testing
    questionHelpers.getQuestions((data) => {
      this.setState({
        questions: data
      })
    })
  }

  onAskSubmit(e) {
    e.preventDefault()

    // Testing
    questionHelpers.postQuestion(this.state.ask, (data) => {
      console.log('asdfasdf')
      this.setState({
        questions: this.state.questions.concat([data]),
        ask: '',
      })
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
        />
      </div>
    )
  }
}

export default AskAldo
