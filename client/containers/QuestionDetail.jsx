import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends Component {
  render() {
    if(!this.props.activeQuestion) {
      return (
        <h3>Select a question</h3>
      )
    }

    return (
      <h3>Selected: {this.props.activeQuestion.text}</h3>
    )
  }
}


const mapStateToProps = ({ activeQuestion }) => {
  return {
    activeQuestion,
  }
}

export default connect(mapStateToProps)(QuestionDetail)
