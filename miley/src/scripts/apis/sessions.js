
"use strict";

require('whatwg-fetch');
var config = require('./_config');
var Resource = require('./resource.js').Resource;


var Session = function() {}
Session.ormify = function(user, callback) {
    return callback(this(user));
};
Session.get = function(id, undefined, callback) {
    Resource.get('/session', this._ormify(Session, callback));
};
Session.register = function(form) {
    fetch(url + '/auth/register', {
        method: 'post',
        body: new FormData(form)
    })
};
Session.prototype = {
    login: function(user, password, callback) {},
    invalidate: function(callback) {}
};



