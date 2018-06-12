import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {

  render() {

    const { question, author, authedUser }  = this.props;
    const voteTotal = question.optionOne.votes.length + question.optionTwo.votes.length;

    return (
      <div className='content'>
        <div>Question asked by: {author.name}</div>
        <figure className="image is-96x96">
          <img src={author.avatarURL} alt={author.name}></img>
        </figure>
        <h1>Would you rather ...</h1>
        <div className='columns'>
          <div className='column'>
            <div className={'box ' + (question.optionOne.votes.includes(authedUser) ? 'option-selected' : '')}>
              {question.optionOne.text}
            </div>
            <div>
              Votes: {question.optionOne.votes.length}, { ((question.optionOne.votes.length / voteTotal) * 100).toPrecision(3) }%
            </div>
          </div>
          <div className='column'>
            <div className={'box ' + (question.optionTwo.votes.includes(authedUser) ? 'option-selected' : '')}>
              {question.optionTwo.text}
            </div>
            <div>
              Votes: {question.optionTwo.votes.length}, { ((question.optionTwo.votes.length / voteTotal) * 100).toPrecision(3) }%
            </div>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];

  return {
    id,
    authedUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionPage);
