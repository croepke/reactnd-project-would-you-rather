import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='navbar is-primary'>
    <div className='navbar-menu is-active'>
      <div className='navbar-start'>
        <Link className='navbar-item' to='/'>Home</Link>
        <Link className='navbar-item' to='/add'>New poll</Link>
        <Link className='navbar-item' to='/leaderboard'>Leaderboard</Link>
      </div>
      <div className='navbar-end'>
        <Link className='navbar-item' to='#'>Login</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
