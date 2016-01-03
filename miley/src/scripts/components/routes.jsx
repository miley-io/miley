/*

  Miley React Routes
  ~~~~~~~~~~~~~~~~~~

*/

"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={require('./base.jsx')}>
    <IndexRoute component={require('./landing.jsx')} />
    <Route path="/users" component={require('./users.jsx')}>
    </Route>
  </Route>
);

module.exports = routes;
