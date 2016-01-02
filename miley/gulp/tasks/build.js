'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean', 'styles', 'images', 'views', 'scripts'], function() {

  global.isProd = false;

});
