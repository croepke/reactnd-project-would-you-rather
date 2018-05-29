import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='columns'>
    <div className='column'>
      <Link to='/'>Home</Link>
      <Link to='/add'>New poll</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
    </div>
    <div className='column is-narrow'>
      Login
    </div>
  </div>
);

export default Navbar;
