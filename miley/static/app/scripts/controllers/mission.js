'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function MissionCtrl(_mission) {
  var mission = this;

  for (var k in _mission) { mission[k] = _mission[k]; }
}

controllers.controller('MissionCtrl', MissionCtrl);
