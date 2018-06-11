import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {
  render() {
    return (
      <div>
        <div>Would you rather ...</div>
        <div>{this.props.question.optionOne.text}</div>
        <div>{this.props.question.optionTwo.text}</div>
      </div>
    )
  }
};

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  console.log(questions);

  return {
    id,
    question
  }
}

export default connect(mapStateToProps)(QuestionPage);
