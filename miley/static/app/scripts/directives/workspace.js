'use strict';

var directives = require('./_index.js');

function workspace() {
  return {
    restrict: 'A',

    controller: function($scope, $state, Context, Workspace) {
      // if (Context.session && Context.session.logged) { }
    }
  }
}

directives.directive('workspace', workspace);
