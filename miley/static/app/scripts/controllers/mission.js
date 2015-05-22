'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function MissionCtrl(_mission, Milestone) {

  var mission = this;

  for (var k in _mission) { mission[k] = _mission[k]; }

  mission.newMilestone = Milestone.reset();
  mission.composingMilestone = false;
  
  mission.openMilestoneComposer = function() {
    mission.composingMilestone = true;
    var ms_list = document.getElementById("ms_list");
    ms_list.scrollTop = ms_list.scrollHeight;
    console.log(mission.composingMilestone);
  }

  mission.closeMilestoneComposer = function() {
    mission.newMilestone = Milestone.reset();
    mission.composingMilestone = false;
  }

  mission.createMilestone = function() {
    Milestone.create(mission['id'], mission.newMilestone).then(function(data) {
      mission.composingMilestone = false;
      mission.newMilestone = Milestone.reset();
    })
  }

}

controllers.controller('MissionCtrl', MissionCtrl);
