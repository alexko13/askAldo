import React, { Component } from 'react';

const QuestionForm = (props) => {
  return (
    <form onSubmit={props.onQuestionSubmit} >
      <input
        onChange={props.onQuestionChange}
        value={props.question}
      />
      <button onClick={props.onQuestionSubmit}>
        askAldo
      </button>
    </form>
  )
}

export default QuestionForm;
