"use strict";

require('whatwg-fetch');
var config = require('./_config');

var Resource = {
    get: function(endpoint, id, cls) {
        var rc_url = config.url + endpoint;
        return fetch(id ? rc_url + '/' + id : rc_url, {
            credentials: 'include'
        }).then(function(response) {
            return Promise.all([response.status, response.json()]);
        }).then(function(completedResponse) {
            return {
                status: completedResponse[0],
                body: completedResponse[1]
            };
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    },

    all: function(endpoint, cls) {
        return Resource.get(endpoint, undefined, cls);
    },

    create: function(endpoint, obj, cls) {
        console.log("NotImplemented");
    },

    update: function(endpoint, id, obj, cls) {
        console.log("NotImplemented");
    }
};
module.exports = Resource;
