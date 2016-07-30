import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createQuestion, fetchQuestions } from '../actions'

class QuestionForm extends Component {
  onSubmitHandler (formValues) {
    const { createQuestion, resetForm, fetchQuestions } = this.props
    createQuestion(formValues)
    .then((res) => {
      resetForm()
      fetchQuestions()
    })
    .catch((err) => {
      console.error(this.constructor.name, err)
    })
  }

  render() {
    const { fields: { text }, handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmitHandler.bind(this)) }>
          <input type='text' { ...text } />
          <button type='submit'>askAldo</button>
          <div>
            { text.touched ? text.error : null }
          </div>
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}

  if (!values.text)
    errors.text = 'enter a text'

  return errors
}

export default reduxForm({
  form: 'CreateQuestion',
  fields: [ 'text' ],
  validate,
}, null, { createQuestion, fetchQuestions })(QuestionForm)
