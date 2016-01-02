'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('views', function() {

  gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.dest));

});