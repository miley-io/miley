'use strict';

var directives = require('./_index.js');

function workspace() {
  return {
    restrict: 'A',

    controller: function($scope, $state, Session, Workspace) {
      // if (Session.session && Session.session.logged) { }
    }
  }
}

directives.directive('workspace', workspace);
