'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function(){
  browserify(config.scripts.main)
  .transform(reactify)
  .bundle()
  .on('error', console.error.bind(console))
  .pipe(source(config.browserify.bundleName))
  .pipe(gulp.dest(config.scripts.dest));
});