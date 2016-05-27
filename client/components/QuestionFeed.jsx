import React, { Component } from 'react';
import Question from './Question'

const QuestionFeed = (props) => {
  const questionComponents = props.questions.sort((a, b) => {
    return a[props.orderBy] < b[props.orderBy];
  }).map((question) => {
    return (
      <Question
        key={question.date}
        text={question.text}
        answer={question.answer}
      />
    );
  });

  return (
    <div>
      {questionComponents}
    </div>
  )
}

QuestionFeed.propTypes = {
  questions: React.PropTypes.array.isRequired,
}

QuestionFeed.defaultProps = {

}

export default QuestionFeed;
