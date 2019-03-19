import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerIsOpen: false
  };
  render() {
    return (
      <div className="app">
        <Toolbar />
        <Backdrop />
        <SideDrawer />
        <main>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
