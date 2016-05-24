// gulpfile.js

// Packages
var gulp = require('gulp');
var uglify = require('gulp-uglify');


// Tasks
gulp.task('games-js', function(){

    gulp
        .src('resources/assets/js/games/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/games'));

});