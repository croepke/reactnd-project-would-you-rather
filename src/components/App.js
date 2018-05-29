import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path='/' exact component={Dashboard} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/login' component={Login} />
          <Route path='/question/:id' component={QuestionPage} />
        </div>
      </Router>
    );
  }
}

export default App;
