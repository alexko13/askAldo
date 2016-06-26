import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends Component {
  render() {
    if(!this.props.question) {
      return (
        <h3>Select a question</h3>
      )
    }

    return (
      <h3>SELECTED: {this.props.question.text}</h3>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    question: state.activeQuestion
  }
}

export default connect(mapStateToProps)(QuestionDetail)
