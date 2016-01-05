"use strict";

var requests = require('./request');

var Session = {
    login: function() {
        return requests.post('/auth/login', obj);
    },
    logout: function() {
        return requests.get('/auth/logout');
    },
    get: function() {
        return requests.get('/session');
    }
}

modules.export = Session;
