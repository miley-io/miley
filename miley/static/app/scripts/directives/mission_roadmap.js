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
    },
    link: function(scope, elem, attrs) {
      var window_height = $window.innerHeight;
      var elem_height = window_height - 199;
      elem.css('height', elem_height + 'px');
    }
  }
}

directives.directive('missionRoadmap', missionRoadmap);
