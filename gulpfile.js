const gulp = require('gulp'),
    watch = require('gulp-watch');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('lessMin', function () {
    return gulp.src('./src/style.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/style.less',gulp.series(['lessMin']))
});