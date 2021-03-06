import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
 
import './App.css';

// Containers
import { LayoutPadrao } from './containers';  

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Inicio" component={LayoutPadrao} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
