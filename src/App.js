import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends Component {
  state = {
    sideDrawerIsOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerIsOpen: !prevState.sideDrawerIsOpen
      };
    });
  }
  backdropClickHandler = () => {
    this.setState({
      sideDrawerIsOpen: false
    });
  }
  render() {
    let backdrop;
    if (this.state.sideDrawerIsOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <div className="app">
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer drawerToggleClickHandler={this.drawerToggleClickHandler} isShown={this.state.sideDrawerIsOpen} />
        {backdrop}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
