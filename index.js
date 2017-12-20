import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './router.js';

import '../style/style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
        <Routes />
    </div>
  </Provider>
  , document.querySelector('.root'));
