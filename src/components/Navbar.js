import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/add'>New poll</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
    </div>
    <div>
      Login
    </div>
  </div>
);

export default Navbar;
