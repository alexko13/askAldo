import React, { Component } from 'react'
// import Question from './Question'
import { connect } from 'react-redux'
import { selectQuestion } from '../actions'
import { bindActionCreators } from 'redux'

// THIS IS NOW A CONTAINER
class QuestionFeed extends Component {
  render() {
    const questionComponents = this.props.questions.sort((a, b) => {
      return a < b
    }).map((question) => {
      return (
        <p
          onClick={() => this.props.selectQuestion(question)}
          key={question.id}>
          {question.text}
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

QuestionFeed.propTypes = {
  questions: React.PropTypes.array.isRequired,
}

QuestionFeed.defaultProps = {

}

// returned will be part of components props
const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

// returned will be part of components props
const mapDispatchToProps = (dispatch) => {
  // when selectQuestion is called, the result is passed to all reducers
  return bindActionCreators({
    selectQuestion: selectQuestion
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFeed)
