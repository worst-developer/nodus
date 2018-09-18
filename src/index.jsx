import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import * as Store from './app/stores';
import Home from './app/containers/Home';
import './main.css';

ReactDOM.render(
  <Provider {...Store}>
    <Home />
  </Provider>, document.getElementById('root'));
