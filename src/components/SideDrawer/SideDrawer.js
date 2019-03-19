import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom'

const SideDrawer = (props) => {
  return (
    <nav className="side-drawer">
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;