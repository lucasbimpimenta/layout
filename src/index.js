import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './vendors/@caixa-ui/bootstrap/dist/themes/cosmo.css';
import './vendors/@caixa-ui/bootstrap/dist/themes/novo-condensed.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) 
{
    module.hot.accept();
}
