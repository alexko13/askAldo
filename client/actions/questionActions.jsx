export const selectQuestion = (question) => {
  // actions need to return objects with a type property
  console.log(`Selected ${question.text}`)
  return {
    type: 'QUESTION_SELECTED',
    payload: question
  }
}
