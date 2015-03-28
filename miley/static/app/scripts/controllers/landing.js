'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function landing($stateParams, $timeout) {
  this.title = "home";
}

controllers.controller('landing', landing);
