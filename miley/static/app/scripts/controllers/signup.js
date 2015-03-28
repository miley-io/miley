'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function signup($stateParams, $timeout) {
  this.title = "sign up";
}

controllers.controller('signup', signup);
