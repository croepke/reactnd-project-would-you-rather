import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    selectedUser: null,
    redirectToReferrer: false
  }

  handleSelect = (e) => {
    console.log(e.target.value);
    this.setState({
      selectedUser: e.target.value
    });
  }

  handleSubmit = (e) => {

    const { dispatch } = this.props;
    const { selectedUser } = this.state;

    if(selectedUser===null) {
      alert("Please select a user to login!");
    }

    dispatch(setAuthedUser(selectedUser));

    this.setState(() => ({
      redirectToReferrer: true,
      selectedUser: null
    }));
  }

  handleLogout = (e) => {
    const { dispatch } = this.props;

    dispatch(setAuthedUser(null));
  }


  render() {
    const { userIds, users, authedUser } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    const { redirectToReferrer } = this.state;
    if(redirectToReferrer === true) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div className='content'>
        { authedUser === null ?
          (
            <div>
              <h1>Please login</h1>
              <div className='select'>
                <select onChange={this.handleSelect}>
                  <option>Please select user</option>
                  { userIds.map((userId) => (<option key={userId} value={userId}>{users[userId].name}</option>))}
                </select>
              </div>
              <button className='button is-info' onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          ) :
          (
            <div>
              <h1>Please logout</h1>
              <button className='button is-info' onClick={this.handleLogout}>
                Logout
              </button>
            </div>
          )
        }
      </div>
    )}
}

function mapStateToProps({ users, authedUser }) {
  return {
    userIds : Object.keys(users),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Login);
