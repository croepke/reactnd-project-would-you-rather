import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to={`/question/${this.props.question.id}`}>
          Would you rather {this.props.question.optionOne.text} or {this.props.question['optionTwo']['text']}
        </Link>
      </div>
    )
  }
}

function mapStateToProps( { authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(Question)
