'use strict';

var directives = require('./_index.js');

function missionRoadmap($window) {
  return {
    restrict: 'A',
    controller: function($scope, $element, $attrs, $timeout, Mission) {
      $timeout(function() {
        var mid = $attrs.mission;
        Mission.milestones(mid).then(function(data) {
          $scope.milestones = data;
        })
      }, 0);
    }
  }
}

directives.directive('missionRoadmap', missionRoadmap);
