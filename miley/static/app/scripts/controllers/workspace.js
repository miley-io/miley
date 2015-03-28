'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function workspace($stateParams, $timeout) {
  this.title = "workspace";
}

controllers.controller('workspace', workspace);
