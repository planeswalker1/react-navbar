import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.drawerToggleClickHandler}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

export default DrawerToggleButton;