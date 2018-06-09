import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='content'>
        <h2>Questions Unanswered</h2>
        <ul>
          {this.props.questionIdsUnanswered.map((id) => <li key={id}><Question id={id} /></li>)}
        </ul>
        <h2>Questions Answered</h2>
        <ul>
          {this.props.questionIdsAnswered.map((id) => <li key={id}><Question id={id} /></li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps( { questions, users, authedUser }) {
  const answeredIds = Object.keys(users[authedUser]['answers']);

  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questionIdsUnanswered: Object.keys(questions).filter(id => !answeredIds.includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questionIdsAnswered: Object.keys(questions).filter(id => answeredIds.includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);
