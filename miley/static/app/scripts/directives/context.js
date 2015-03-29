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
      });
    }
  }
}

directives.directive('context', context);
