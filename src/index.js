import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './route';
import * as serviceWorker from './serviceWorker';
import './styles/style.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
