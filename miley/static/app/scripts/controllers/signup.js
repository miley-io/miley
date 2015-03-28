'use strict';

var mileyControllers = require('./_index');

/**
 * @ngInject
 */

function SignupCtrl($stateParams, $timeout) {

  // ViewModel
  var signup = this;

  signup.title = "Sign up";

}

mileyControllers.controller('SignupCtrl', SignupCtrl);
