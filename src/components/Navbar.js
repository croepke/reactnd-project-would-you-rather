import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => (
  <div className='navbar is-primary'>
    <div className='navbar-menu is-active'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>Home</Link>
          <Link className='navbar-item' to='/add'>New poll</Link>
          <Link className='navbar-item' to='/leaderboard'>Leaderboard</Link>
        </div>
      <div className='navbar-end'>
        <Link className='navbar-item' to='/login'>
          {
            props.authedUser ?
            <div>Logged in as: <strong>{props.authedUser}</strong></div> :
            <div>Login</div>
          }
        </Link>
      </div>
    </div>
  </div>
);

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Navbar);
