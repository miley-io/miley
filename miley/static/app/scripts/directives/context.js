'use strict';

var directives = require('./_index.js');

function context() {
  return {
    restrict: 'A',

    controller: function($scope, Session, Workspace) {
      // On (all) pageload, fetch session
      Session.get().then(function (session) {
        Session.session = session;
        $scope.session = session;

        if ($scope.session.logged) {
          $scope.layout = 'l-private';
          // Get missions
          Workspace.missions().then(function (missions) {
            $scope.missions = missions;
          })
        } else {
          $scope.layout = 'l-public';
        }
      });
    }
  }
}

directives.directive('context', context);
