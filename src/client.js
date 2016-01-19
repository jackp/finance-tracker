/**
 * Client entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './components/App';

let createStoreWithMiddleware;
let DevTools;

if (__DEV__) {
  DevTools = require('./components/DevTools').default;

  createStoreWithMiddleware = compose(DevTools.instrument())(createStore);
} else {
  createStoreWithMiddleware = createStore;
}

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      { __DEV__ ? <DevTools /> : null }
    </div>
  </Provider>,
  document.getElementById('application')
);
