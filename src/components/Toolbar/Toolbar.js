import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {NavLink} from 'react-router-dom';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton drawerToggleClickHandler={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar__logo">
        <NavLink to="/">THE LOGO</NavLink>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;