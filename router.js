import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home';
import AssetLookup from './components/assetLookup';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: AssetLookup },
  childRoutes: [
    {
      path: 'organizations',
      exact: true,
      getComponent(location, cb) {
        System.import('./containers/organizations/organizationsList')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/new',
      getComponent(location, cb) {
        System.import('./containers/organizations/organizationsNew')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:id',
      getComponent(location, cb) {
        System.import('./containers/organizations/organizationDetail')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/edit/:id',
      getComponent(location, cb) {
        System.import('./containers/organizations/organizationsEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/snowconfig/new',
      getComponent(location, cb) {
        System.import('./containers/snowConfig/snowConfigNew')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/snowconfig/edit/:snowConfigId',
      getComponent(location, cb) {
        System.import('./containers/snowConfig/snowConfigEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/snowconfig/edit/:snowConfigId',
      getComponent(location, cb) {
        System.import('./containers/snowConfig/snowConfigEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/dockerconfig/new',
      getComponent(location, cb) {
        System.import('./containers/dockerConfig/dockerConfigNew')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/dockerconfig/edit/:dockerConfigId',
      getComponent(location, cb) {
        System.import('./containers/dockerConfig/dockerConfigEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/products/new',
      getComponent(location, cb) {
        System.import('./containers/products/productsNew')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'organizations/:orgId/products/edit/:productId',
      getComponent(location, cb) {
        System.import('./containers/products/productsEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'products/:productId/components/edit/:componentId',
      getComponent(location, cb) {
        System.import('./containers/components/componentsEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'products/:productId/components/edit/:componentId',
      getComponent(location, cb) {
        System.import('./containers/components/componentsEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'products/:productId/components/new',
      getComponent(location, cb) {
        System.import('./containers/components/componentsNew')
          .then(module => cb(null, module.default));
      }
    },
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
    {
      path: 'components/:componentId/assets/new',
      getComponent(location, cb) {
        System.import('./containers/assets/assetsNew')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'components/:componentId/assets/edit/:assetId',
      getComponent(location, cb) {
        System.import('./containers/assets/assetsEdit')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'components/:componentId',
      getComponent(location, cb) {
        System.import('./containers/components/componentDetail')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'components',
      getComponent(location, cb) {
        System.import('./containers/components/componentsList')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'assets/:assetId',
      getComponent(location, cb) {
        System.import('./containers/assets/assetDetail')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'asset_lookup',
      getComponent(location, cb) {
        System.import('./components/assetLookup')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;