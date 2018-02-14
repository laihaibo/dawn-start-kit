import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import 'normalize.css';

// import registerServiceWorker from '../untils/registerServiceWorker';

import '../assets/common.less';
import App from '../containers/App';

import store from '../store';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();
