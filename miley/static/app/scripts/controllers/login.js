'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function LoginCtrl($stateParams, Session) {
  this.user = {};
  this.title = "Login";
  this.signin = function() {
    Session.login(this.user).then(function(data) {
      window.location.href = '/';
    });
  };
}

controllers.controller('LoginCtrl', LoginCtrl);
