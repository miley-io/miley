'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function WorkspaceCtrl($scope, $stateParams, $window, Workspace) {
  this.title = "workspace";
  $scope.ui = { showingStepModal: false};
}

controllers.controller('WorkspaceCtrl', WorkspaceCtrl);
