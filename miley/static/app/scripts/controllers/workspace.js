'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function WorkspaceCtrl($stateParams, Workspace) {
  this.title = "workspace";
}

controllers.controller('WorkspaceCtrl', WorkspaceCtrl);
