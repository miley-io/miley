"use strict";

require('whatwg-fetch');
var Resource = require('./resource');

var User = function(user) {
    Resource.call(this, this, user);
};
User.all = function() {
    return Resource.all('/users/');
}
User.get = function(id) {
    return Resource.get('/users/', id);
}
User.prototype = {
    orgs: function() {}, // TODO: get this user's orgs,
}

module.exports = User;
