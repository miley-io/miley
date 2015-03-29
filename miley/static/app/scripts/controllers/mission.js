'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function MissionCtrl($state, $stateParams, Mission) {

  var mission = this;
  var uname = $stateParams.uname;
  var mslug = $stateParams.mslug;

  Mission.get(uname, mslug).then(function(data) {
    for (var k in data) { mission[k] = data[k]; }
    console.log(mission);
  }, function() {
    $state.go('Login');
  });
}

controllers.controller('MissionCtrl', MissionCtrl);
