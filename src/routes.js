import React from 'react';
import Loadable from 'react-loadable'

import LayoutPadrao from './containers/LayoutPadrao';

function Loading() {
  return <div>Loading...</div>;
}

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Inicio', component: LayoutPadrao }
];

export default routes;
