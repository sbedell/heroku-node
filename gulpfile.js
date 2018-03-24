'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const htmlhint = require('gulp-htmlhint');
const path = require('path');
const testServer = require('karma').Server;

const paths = {
  html: ['./public/views/**/*.html'],
  css: './public/styles/css/',
  js: ['./*.js', './public/js/*.js']
};

gulp.task('jslint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('htmlhint', function() {
  return gulp.src(paths.html)
	.pipe(htmlhint())
	.pipe(htmlhint.reporter());
});

gulp.task('test', function(done) {
  return new testServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('lint', ['jslint', 'htmlhint']);

gulp.task('default', ['lint', 'test']);
