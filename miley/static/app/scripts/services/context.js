'use strict';

var services = require('./_index.js');

/**
 * @ngInject
 */
function Context($q, $http) {
  return {
    session: {},
    default: function() {
      return {
        session: {}
      }
    }
  }
}

services.service('Context', Context);
