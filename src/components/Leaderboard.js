import React, { Component } from 'react';
import LeaderboardEntry from './LeaderboardEntry';
import { connect } from 'react-redux';

class Leaderboard extends Component { 

  render() {
    return (
      <div className='content'>
        <h1>Leaderboard</h1>
        {this.props.userIds.map((id) => <LeaderboardEntry key={id} id={id} />)}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const userIds = Object.keys(users)
    .sort(
      (a,b) => (
        (Object.keys(users[b].answers).length+users[b].questions.length)-
        (Object.keys(users[a].answers).length+users[a].questions.length))
    );
  console.log(userIds);
  return {
    userIds
  }
}

export default connect(mapStateToProps)(Leaderboard);
