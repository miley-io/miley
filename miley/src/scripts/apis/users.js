"use strict";

var requests = require('./request');


var User = function() {
    var _User = function(id) {
        this.user = requests.get('/users/', id);
        this.userId = id;
    };
    _User.prototype = {
        save: function(obj) {
            // NotImplemented
        }
    };
    _User.all = function() {
        return requests.get('/users/');
    };
    _User.create = function(obj) {
        return requests.create('/auth/register', obj);
    };
    return _User;
}();


var Org = function() {
    var _Org = function(id) {
        this.org = requests.get('/orgs', id);
        this.orgId = id;
    }
    _Org.prototype = {
        save: function(obj) {
            // NotImplemented
        }
    };
    _Org.all = function() {
        return requests.get('/orgs');
    }
    return _Org;
}();


module.exports = {
    'User': User,
    'Org': Org
};
