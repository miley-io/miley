/*
  
  Miley React Application
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;

// Import Route Configuration
var routes = require('./routes.jsx');

var App = React.createClass({
  render: function(){
    return (
      <Router>
        {routes}
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('miley'));
