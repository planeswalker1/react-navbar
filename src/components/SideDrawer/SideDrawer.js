import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom'

const SideDrawer = (props) => {
  let drawerClasses = ['side-drawer'];
  if (props.isShown) {
    drawerClasses = [...drawerClasses, 'side-drawer--open']
  }
  return (
    <nav className={drawerClasses.join(' ')}>
    <ul>
        <li><NavLink to="/" onClick={props.drawerToggleClickHandler}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={props.drawerToggleClickHandler}>About</NavLink></li>
    </ul>
  </nav>
  );
};

export default SideDrawer;