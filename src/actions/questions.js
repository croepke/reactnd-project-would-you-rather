import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const QUESTION_VOTE = 'QUESTION_VOTE';

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
