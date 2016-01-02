'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'src/styles/**/*.scss',
    'dest': 'dist/styles'
  },

  'scripts': {
    'main': 'src/scripts/components/app.js',
    'src' : 'src/scripts/**/*',
    'dest': 'dist/scripts'
  },

  'images': {
    'src' : 'src/images/**/*',
    'dest': 'dist/images'
  },

  'views': {
    'watch': [
      'src/index.html'
    ],
    'src': 'src/index.html',
    'dest': 'dist'
  },

  'dist': {
    'root': 'dist'
  },

  'browserify': {
    'entries'   : ['./src/scripts/miley.js'],
    'bundleName': 'miley.js'
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};