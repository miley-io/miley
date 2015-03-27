'use strict';

var mileyServices = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function User($q, $http) {

  var user = {};

  user.reset = function() {
    return {type: "User"}
  };

  user.auth = function(user) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: AppSettings.apiPath + '/auth/login?service=miley',
      data: user
    }).success(function(data) {
      deferred.resolve(data);
    }).error(function(data) {
      deferred.reject(err, status);
    })

    return deferred.promise;
  };

  return user;

}

mileyServices.service('User', User);
