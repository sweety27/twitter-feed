var gulp = require('gulp'),
    connect = require('gulp-connect');

var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.js');
    gulp.watch('**/*.html');
     gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('connect', function() {
    connect.server({
        root: ''
    });
});

gulp.task('default', ['connect', 'watch', 'styles']);