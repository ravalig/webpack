import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home';
import AssetLookup from './components/assetLookup';

const componentRoutes = {
  component: Home,
  path: '/',
  childRoutes: [

    {
      path: 'products/:id',
      getComponent(location, cb) {
        System.import('./containers/products/productDetail')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'products',
      getComponent(location, cb) {
        System.import('./containers/products/productsList')
          .then(module => cb(null, module.default));
      }
    },

  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;