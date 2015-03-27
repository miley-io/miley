'use strict';

var mileyControllers = require('./_index');

/**
 * @ngInject
 */

function MissionCtrl($stateParams, $timeout) {

  // ViewModel
  var mission = this;

  mission.title = "Mission";
  mission.orgname = "nomagi";
  mission.slug = "miley";

}

mileyControllers.controller('MissionCtrl', MissionCtrl);
