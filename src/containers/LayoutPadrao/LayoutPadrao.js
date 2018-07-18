import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// routes config
import routes from '../../routes';

import CabecalhoPadrao from './CabecalhoPadrao';

class LayoutPadrao extends Component {
  render() {
    return (
      <div className="app">
        <CabecalhoPadrao />
        <div className="app-body">
        </div>
      </div>
    );
  }
}

export default LayoutPadrao;
