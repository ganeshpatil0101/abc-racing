import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { createAppStore } from './store/configureStore';
import './i18n';
import analytics from './analytics';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const history = createBrowserHistory();
const initialState = {};
const store = createAppStore(initialState, history);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();
