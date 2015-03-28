'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function roadmap($stateParams, $timeout) {

  var mission = this;
  mission.title = "Roadmap";
  mission.orgname = "";
  mission.slug = "";

}

controllers.controller('roadmap', roadmap);
