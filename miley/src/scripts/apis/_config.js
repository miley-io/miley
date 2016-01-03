
"use strict";

//try {
//    var cfg = require('./settings.json');
//} catch(e) {
var cfg = undefined;
//}

module.exports = {
    url: cfg ? cfg.apiurl : 'https://miley.io/v1',
};
