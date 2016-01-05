"use strict";

require('whatwg-fetch');
var config = require('./_config');

var requests = {
    get: function(endpoint, id) {
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

    post: function(endpoint, obj) {
        return fetch(config.url + endpoint, {
            credentials: 'include',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
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

    put: function(endpoint, id, obj) {
        console.log("NotImplemented");
    },

    delete: function(endpoint, id, obj) {
        console.log("NotImplemented");
    }
};

module.exports = requests;
