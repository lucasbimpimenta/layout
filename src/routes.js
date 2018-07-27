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

const AtendimentoSolicitacao = Loadable({
  loader: () => import('./views/Atendimento/AtendimentoSolicitacao'),
  loading: Loading,
});

const AtendimentoSolicitacaoNova = Loadable({
  loader: () => import('./views/Atendimento/AtendimentoSolicitacaoNova'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Inicio', component: LayoutPadrao },
  { path: '/inicio', name: 'Início', component: Dashboard },
  { 
    path: '/atendimento/solicitacao', 
    name: 'Solicitação', 
    component: AtendimentoSolicitacao,
    routes: 
    [
      { 
        path: '/atendimento/solicitacao/nova',
        component: AtendimentoSolicitacaoNova,
        name: 'Nova Solicitação'
      }
    ]
  },
];

export default routes;
