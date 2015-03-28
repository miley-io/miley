'use strict';

var cfg = require('./settings.json');

var AppSettings = {
  appTitle: 'Miley',
  apiPath: cfg ? cfg.apiPath : 'http://localhost/v1'
};

module.exports = AppSettings;
