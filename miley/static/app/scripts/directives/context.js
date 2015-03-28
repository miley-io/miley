'use strict';

var directives = require('./_index.js');

function context() {
  return {
    restrict: 'A',

    controller: function($scope, $state, Context, User) {
      // Updates the user's session within the app's context
      User.session().then(function (session) {
        Context.session = session;
      });
    }
  }
}

directives.directive('context', context);
