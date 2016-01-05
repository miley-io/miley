"use strict";

var User = require('../apis/users').User;
var React = require('react');

var BuddyList = React.createClass({

    getInitialState: function() {
        return {
            users: []
        }
    },
    
    componentDidMount: function() {
        var self = this;
        User.all().then(function(response) {
            self.setState({users: response.body});
        });
    },

    render: function() {
        var buddies = this.state.users.map(function(user) {
            return (
                <li key={user.id}>{user.id} | {user.name}</li>
            )
        });
        return (
            <div>
            <h1>Buddy List</h1>            
            <ol>
                {buddies}
            </ol>
            </div>
        );
    }
});

module.exports = BuddyList;
