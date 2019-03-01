'use strict';
// 02/26/2019 David Churn created
// This file has three defined functions.
// Compress - JavaScript files in scripts subdirectory
// Compile - SASS definitions from scss subdirectories
// Watch - Do the Compress and Compile tasks then watch for changes to either.

// Known to do
// 0) Change existing flows to new subdirectories.
// 1) Add JShint to JavaScript actions.
// 2) Define imagines flow to compress and move to /build.
// 3) Define HTML process to copy HTML to /build.
// 4) Define process to copy fonts to /build.
// 5) Should images and fonts be part of watch process?
// 6) Test all the processes.  Verify watcher is working to start processes.

// core modules

// third party modules
let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let babel = require('gulp-babel');
let browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

let sass = require('gulp-sass');
sass.compiler = require('node-sass');

// looks for index.html in the same directory as this gulp file.
function bsInit() {
  browserSync.init({
       server: "./"
   });
}


// local modules

// Action!
//  Find all the javascript files in scripts
//  Concatenate them together in script.js
// into the dist subdirectory
// function concatJS() {
//   return gulp.src('./scripts/*.js')
//     .pipe(concat('script.js'))
//     .pipe(gulp.dest('./dist/'))
// }

// concat then uglify then write result.
function compressJS() {
  return gulp.src('./scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
}

//compile Sass files
function compileScss () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
}

function reloadHTML() {
  return gulp.src('./index.html')
    .pipe(browserSync.stream())
}

// watchers
function watchHTML() {
  gulp.watch('./index.html',htmlProcess);
}
function watchJS() {
  gulp.watch('./scripts/*.js', compressProcess)
}
function watchSCSS() {
  gulp.watch('./scss/**/*.scss',compileProcess)
}

// What should it do?
let htmlProcess = gulp.series(reloadHTML);

let compressProcess = gulp.series(compressJS);
gulp.task('compress', compressProcess);

let compileProcess = gulp.series(compileScss);
gulp.task('compile',compileProcess);

let watches = gulp.parallel(bsInit, watchHTML, watchJS, watchSCSS);

let watcher = gulp.series(compressProcess,compileProcess,watches);
gulp.task('watch', watcher);

// gulp.parallel is used to run the scripts in parallel.
// gulp.series runs them 1 at a time
