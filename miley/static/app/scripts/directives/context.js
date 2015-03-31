'use strict';

var directives = require('./_index.js');

function context() {
  return {
    restrict: 'A',

    controller: function($scope, Session) {
      // On (all) pageload, fetch session
      Session.get().then(function (session) {
        Session.session = session;
        $scope.session = session;

        /* body class */
        if ($scope.session.logged) {
          $scope.layout = 'l-private';
        } else {
          $scope.layout = 'l-public';
        }
      });
    }
  }
}

directives.directive('context', context);
