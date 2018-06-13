import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {

  handleVote(e) {
    e.preventDefault();
    alert("YES");
  }

  render() {

    const { id, question, author, users, authedUser }  = this.props;
    const voteTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
    const answered = Object.keys(users[authedUser].answers).includes(id);
    return (
      <div className='content'>
        <div>Question asked by: {author.name}</div>
        <figure className="image is-96x96">
          <img src={author.avatarURL} alt={author.name}></img>
        </figure>
        <h1>Would you rather ...</h1>
        <div className='columns'>
          <div className='column'>
            <div onClick={(e) => this.handleVote(e)} className={'button ' + (question.optionOne.votes.includes(authedUser) ? 'option-selected' : '')}>
              {question.optionOne.text}
            </div>
            { answered ?
              <div>
                Votes: {question.optionOne.votes.length}, { ((question.optionOne.votes.length / voteTotal) * 100).toPrecision(3) }%
              </div>
              : null
            }
          </div>
          <div className='column'>
            or
          </div>
          <div className='column'>
            <div onClick={(e) => this.handleVote(e)} className={'button ' + (question.optionTwo.votes.includes(authedUser) ? 'option-selected' : '')}>
              {question.optionTwo.text}
            </div>
            { answered ?
              <div>
                Votes: {question.optionTwo.votes.length}, { ((question.optionTwo.votes.length / voteTotal) * 100).toPrecision(3) }%
              </div>
              : null
            }
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
    users,
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionPage);
