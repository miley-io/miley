'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function SignupCtrl($stateParams, $timeout, Session) {
  this.title = "Sign Up";
  this.register = function() {
    this.user.password_conf = this.user.password;
    Session.register(this.user).then(function(data) {
      Session.sendActivationEmail().then(function(data) {
        window.location.href = '/';
      });
    });
  };
}

controllers.controller('SignupCtrl', SignupCtrl);
