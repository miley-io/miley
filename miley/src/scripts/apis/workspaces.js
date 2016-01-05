"use sctrict";

var requests = require('./request');


/*
var Detail = function() {
    var _Detail = function(missionId, milestoneId, taskId, stepId, detailId) {
        this.detail = requests.get(
            '/missions/' + missionId + '/milestones/' + milestoneId +
            '/tasks/' + taskId + '/steps' + stepId +
            '/details/' + detailId
            );
        this.missionId = missionId;
        this.milestoneId = milestoneId;
        this.taskId = taskId;
        this.stepId = stepId;
        this.detailId;
    }
    return _Detail;
}();
*/


var Step = function() {
    var _Step = function(missionId, milestoneId, taskId, stepId) {
        this.step = requests.get(
            '/missions/' + missionId + '/milestones/' + milestoneId +
                '/tasks/' + taskId + '/steps' + stepId
        );
        this.missionId = missionId;
        this.milestoneId = milestoneId;
        this.taskId = taskId;
        this.stepId = stepId;
    };
    _Step.all = function(missionId, milestoneIdm taskId) {
        return requests.get(
            '/missions/' + missionId + '/milestones/' + milestoneId +
                '/tasks' + taskId + '/steps');
    };
    _Step.prototype = {
        /*
        details: function(detailId) {
            // `id` is optional, all returned in no `id` specified 
            return id ? new Detail(
                this.missionId, this.milestoneId, this.taskId, this.stepId, detailId
            ) : Detail.all(this.missionId, this.milestoneId, this.taskId);
        }, */
        save: function(obj) {
            // NotImplemented
        }
    };
}();


var Task = function() {
    var _Task = function(missionId, milestoneId, taskId) {
        this.task = requests.get(
            '/missions/' + missionId + '/milestones/' + milestoneId +
                '/tasks/' + taskId
        );
        this.missionId = missionId;
        this.milestoneId = milestoneId;
        this.taskId = taskId;
    }
    _Task.all = function(missionId, milestoneId) {
        return requests.get(
            '/missions/' + missionId + '/milestones/' +
                milestoneId + '/tasks');
    }
    _Task.prototype = {
        steps: function(stepId) {
            /* `id` is optional, all returned in no `id` specified */
            return id ? new Step(this.missionId, this.milestoneId, this.taskId, stepId) :
                Step.all(this.missionId, this.milestoneId, this.taskId);
        },
        save: function(obj) {
            // NotImplemented
        }
    }
    return _Task;
}();


var Milestone = function() {
    var _Milestone = function(missionId, milestoneId) {
        this.milestone = requests.get(
            '/missions/' + missionId + '/milestones/', milestoneId
        );
        this.missionId = missionId;
    }
    _Milestone.all = function(missionId) {
        return requests.get(
            '/missions/' + missionId + '/milestones'
        );
    }
    _Milestone.prototype = {
        tasks: function(taskId) {
            /* `id` is optional, all returned in no `id` specified */
            return id ? new Task(this.missionId, this.milestoneId, taskId) :
                Task.all(this.missionId, this.milestoneId);
        },
        save: function(obj) {
            // NotImplemented
        }
    };
    return _Milestone
}();


var Mission = function() {
    var _Mission = function(id) {
        this.mission = requests.get('/missions/', id);
        this.missionId = id;
    }
    _Mission.prototype = {
        milestones: function(milestoneId) {
            /* `id` is optional, all returned in no `id` specified */
            return id ? new Milestone(this.missionId, milestoneId) :
                Milestone.all(this.missionId);
        },
    }
    _Mission.all = function() {
        return requests.get('/missions')
    };
    _Mission.create = function() {
        return requests.post('/missions', obj);
    };
    return _Mission;
}();


module.exports = {
    'Mission': Mission,
    'Milestone': Milestone,
    'Step': Step,
    'Task': Task
}
