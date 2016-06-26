import React, { Component } from 'react'
import QuestionList from '../containers/QuestionList'
import QuestionDetail from '../containers/QuestionDetail'

class App extends Component {
  render () {
    return (
      <div>
        <QuestionDetail />
        <QuestionList />
      </div>
    )
  }
}

export default App
