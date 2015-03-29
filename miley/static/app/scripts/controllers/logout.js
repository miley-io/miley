'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function LogoutCtrl($state, Session) {
  Session.logout();
  window.location.href = '/';
}

controllers.controller('LogoutCtrl', LogoutCtrl);
