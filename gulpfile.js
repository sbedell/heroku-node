'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const sassLint = require('gulp-sass-lint');
const csslint = require('gulp-csslint');
const htmlhint = require('gulp-htmlhint');
const nodemon = require('gulp-nodemon');
const path = require('path');
const testServer = require('karma').Server;

const paths = {
  html: ['./public/views/**/*.html'],
  sass: './public/styles/sass/*.scss',
  css: './public/styles/css/*.css',
  js: ['./*.js', './public/js/*.js']
};

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/css/'));
});
 
gulp.task('sass:watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('sass:lint', function() {
  return gulp.src(paths.sass)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('csslint', function() {
  gulp.src(paths.css)
    .pipe(csslint())
    .pipe(csslint.reporter());
});

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

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js scss', //html
    tasks: function(changedFiles) {
      var tasks = [];
      changedFiles.forEach(function(file) {
        if (path.extname(file) === '.scss' && !~tasks.indexOf('sass')) tasks.push('sass');
        // if (path.extname(file) === '.js' && !~tasks.indexOf('jslint')) tasks.push('jslint');
      });
      return tasks;
    }
  });
});

gulp.task('test', function(done) {
  return new testServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('lint', ['jslint', 'htmlhint', 'sass:lint', 'csslint']);

gulp.task('default', ['lint', 'nodemon']);
