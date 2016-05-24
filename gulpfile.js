// gulpfile.js

// Packages
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


// Tasks

// Uglify
gulp.task('games-js', function(){

    return gulp
        .src('resources/assets/js/games/index.js')
        //.pipe(rename('index.min.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/games'));

});


// Browserify & Babel
gulp.task('users-js', function(){

    return browserify('resources/assets/js/users/index.js')
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('user-bundle.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('public/js/users'));

});
