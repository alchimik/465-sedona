'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('css:build', function () {
    var sourcemaps = require('gulp-sourcemaps');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');

    return gulp.src('css/src/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        // .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
});

gulp.task('css:minify', function () {
    var cleanCSS = require('gulp-clean-css');

    return gulp.src('css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(function (path) {
            path.basename += "-min";
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('css:watch', function () {
    gulp.watch('css/src/**', ['css:build']);
});


gulp.task('js:minify', function () {
    var uglify = require('gulp-uglify');

    return gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += "-min";
        }))
        .pipe(gulp.dest('js'));
});