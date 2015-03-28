'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'miley.controllers',
    'miley.services',
    'miley.directives'
  ];

  // mount on window for testing
  window.app = angular.module('miley', requires, function($interpolateProvider) {
    // use custom templating delimiters
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');    
  });

  angular.module('miley').constant('AppSettings', require('./config'));

  angular.module('miley').config(require('./routes'));

  angular.module('miley').run(require('./on_run'));

  angular.bootstrap(document, ['miley']);

});
