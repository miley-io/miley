'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function MissionCtrl($state, $stateParams, _mission) {

  var mission = this;
  var uname = $stateParams.uname;
  var mslug = $stateParams.mslug;

  for (var k in _mission) { mission[k] = _mission[k]; }

}

controllers.controller('MissionCtrl', MissionCtrl);
