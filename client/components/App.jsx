import React, { Component } from 'react'
import QuestionList from '../containers/QuestionList'
import QuestionDetail from '../containers/QuestionDetail'
import QuestionForm from '../containers/QuestionForm'

export default class App extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
