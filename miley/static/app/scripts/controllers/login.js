'use strict';

var mileyControllers = require('./_index');

/**
 * @ngInject
 */

function LoginCtrl($stateParams, $timeout) {

  // ViewModel
  var login = this;

  login.title = "Login";

}

mileyControllers.controller('LoginCtrl', LoginCtrl);
