'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function MilestoneCtrl($scope, $stateParams, Mission) {

  var milestone = this;

  var mid = $scope.mission.id;
  var msid = $stateParams.msid;
  
  Mission.milestone(mid, msid).then(function(_milestone) {
    for (var k in _milestone) { milestone[k] = _milestone[k]; }
  }, function() {
    console.log('Mission.milestone failed');
  })
}

controllers.controller('MilestoneCtrl', MilestoneCtrl);
