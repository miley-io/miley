'use strict';

var config = require('../config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('styles', function () {

  gulp.src(config.styles.src)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      sourceMap: 'sass',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});
