import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {
            this.props.loading === true
              ? null
              :
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/login' component={Login} />
                <Route path='/question/:id' component={QuestionPage} />
              </div>
          }

        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
