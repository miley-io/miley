"use strict";

var workspace = require('../apis/workspaces');
var React = require('react');

var Workspace = React.createClass({

    getInitialState: function() {
        return {
            missions: []
        }
    },
    
    componentDidMount: function() {
        var self = this;
        workspace.Mission.all().then(function(response) {
            self.setState({missions: response.body});
        });
    },

    render: function() {
        var buddies = this.state.missions.map(function(mission) {
            return (
                <li key={mission.id}>{mission.title} (id: {mission.id})</li>
            )
        });
        return (
            <div>
            <h1>Workspace</h1>
            <ul>
                {buddies}
            </ul>
            </div>
        );
    }
});

module.exports = Workspace;
