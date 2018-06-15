import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderboardEntry extends Component {
  render() {
    return (
      <div className='media'>
        <figure className='media-left'>
          <p className='image is-96x96'>
            <img src={this.props.user.avatarURL} alt={this.props.user.name}></img>
          </p>
        </figure>
        <div className='media-content'>
          <p>
            <strong>{this.props.user.name}</strong>
            <br />
            Questions asked: {this.props.user.questions.length}
            <br />
            Questions answered: {Object.keys(this.props.user.answers).length}
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { users }, { id }) {
  const user = users[id];

  return {
    user
  }
}

export default connect(mapStateToProps)(LeaderboardEntry);
