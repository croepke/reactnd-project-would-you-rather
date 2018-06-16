import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const QUESTION_VOTE = 'QUESTION_VOTE';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function questionVote({ qid, answer, authedUser }) {
  return {
    type: QUESTION_VOTE,
    authedUser,
    qid,
    answer
  }
}

export function handleQuestionVote(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then((o) => dispatch(questionVote(info)))
  }
}
