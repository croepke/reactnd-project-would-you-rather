import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import PrivateRoute from './PrivateRoute';
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
          <PrivateRoute path='/' exact component={Dashboard} />
          <PrivateRoute path='/leaderboard' component={Leaderboard} />
          <PrivateRoute path='/add' component={NewQuestion} />
          <PrivateRoute path='/question/:id' component={QuestionPage} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
