import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {

  state = {
    showAnsweredQuestions: false
  }

  handleToggle = () => {
    this.setState({
      showAnsweredQuestions: !this.state.showAnsweredQuestions
    })
  }

  render() {
    return (
        <div className='container'>
          { !this.state.showAnsweredQuestions ?
            <div>
              <div className='content'>
                <h2>Questions Unanswered</h2>
              </div>
              <ul>
                {this.props.questionIdsUnanswered.map((id) => <li key={id}><Question id={id} /></li>)}
              </ul>
            </div>
            :
            <div>
              <div className='content'>
                <h2>Questions Answered</h2>
              </div>
              <ul>
                {this.props.questionIdsAnswered.map((id) => <li key={id}><Question id={id} /></li>)}
              </ul>
            </div>
          }
          <br />
          <button className='button is-warning' onClick={this.handleToggle}>Switch questions</button>
        </div>
    )
  }
}

function mapStateToProps( { questions, users, authedUser }) {
  const answeredIds = Object.keys(users[authedUser]['answers']);

  return {
    questionIdsUnanswered: Object.keys(questions).filter(id => !answeredIds.includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questionIdsAnswered: Object.keys(questions).filter(id => answeredIds.includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);
