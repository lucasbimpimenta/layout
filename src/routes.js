import React from 'react';
import Loadable from 'react-loadable'

import LayoutPadrao from './containers/LayoutPadrao';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Inicio', component: LayoutPadrao },
  { path: '/inicio', name: 'Início', component: Dashboard },
  { path: '/atendimento/solicitacao', name: 'Solicitação', component: Dashboard },
  { path: '/atendimento/solicitacao/nova', name: 'Nova Solicitação', component: Dashboard },
];

export default routes;
