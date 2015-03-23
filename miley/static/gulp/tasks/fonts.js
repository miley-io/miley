'use strict';

var config     = require('../config');
var changed    = require('gulp-changed');
var gulp       = require('gulp');
var gulpif     = require('gulp-if');

    gulp.task('fonts', function() {

  var dest = config.fonts.dest;

  return gulp.src(config.fonts.src)
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));

});
