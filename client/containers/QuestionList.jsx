import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectQuestion, fetchQuestions } from '../actions'

class QuestionFeed extends Component {
  componentWillMount () {
    this.props.fetchQuestions()
  }

  render() {
    const questionComponents = this.props.questions.map((question) => {
      return (
        <p key={ question._id } onClick={() => this.props.selectQuestion(question)}>
          { question.text }
        </p>
      )
    })

    return (
      <div>
        {questionComponents}
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectQuestion,
    fetchQuestions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFeed)
