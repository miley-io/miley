'use strict';

var mileyControllers = require('./_index');

/**
 * @ngInject
 */

function LoginCtrl($scope, $stateParams, $timeout, User) {

  $scope.user = {};
  $scope.title = "Login";
  $scope.signin = function(creds) {
    console.log($scope.user);
    User.login($scope.user).then(function(data) {
    //   var s = User.session();
    });
  };
}

mileyControllers.controller('LoginCtrl', LoginCtrl);
