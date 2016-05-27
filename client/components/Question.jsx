import React, { Component } from 'react';

const Question = (props) => {
  return (
    <div>
      <p>Q: {props.text}</p>
      <p>A: {props.answer}</p>
    </div>
  )
}

Question.propTypes = {
  text: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string,
}

Question.defaultProps = {

}

export default Question;
