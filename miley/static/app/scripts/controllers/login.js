'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function login($scope, $stateParams, $timeout, User) {
  $scope.user = {};
  $scope.title = "Login";
  $scope.signin = function(creds) {
    console.log($scope.user);
    User.login($scope.user).then(function(data) {
      var s = User.session();
    });
  };
}

controllers.controller('login', login);
