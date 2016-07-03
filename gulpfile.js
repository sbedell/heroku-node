var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('sass', function() {
  'use strict';
  return gulp.src('./styles/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css/'));
});
 
gulp.task('sass:watch', function() {
  'use strict';
  gulp.watch('./styles/sass/style.scss', ['sass']);
});

gulp.task('jslint', function() {
  'use strict';
  return gulp.src(['./server.js', './gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['jslint', 'sass', 'sass:watch']);
