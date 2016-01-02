'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {

  gulp.watch(config.views.src, ['views']);
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.images.src, ['images']);

})