'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function SignupCtrl($stateParams, $timeout) {
  this.title = "sign up";
}

controllers.controller('SignupCtrl', SignupCtrl);
