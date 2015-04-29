'use strict';

var directives = require('./_index.js');

function missionRoadmap() {
  return {
    restrict: 'A',

    controller: function($scope, $state, Mission) {

      Mission.milestones().then(function(data) {
        $scope.milestones = data;
        console.log($scope.milestones);
      })
      
    }
  }
}

directives.directive('missionRoadmap', missionRoadmap);
