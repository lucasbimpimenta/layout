import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

// routes config
import routes from '../../routes';

import CabecalhoPadrao from './CabecalhoPadrao';
import CaixaBreadcrumb from './CaixaBreadcrumb';

class LayoutPadrao extends Component {
  render() {
    return (
      <div className="app">
        <CabecalhoPadrao />
        <div className="app-body">
          <main className="main">
            <CaixaBreadcrumb/>
            <Container fluid> 
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/inicio" />
              </Switch>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default LayoutPadrao;
