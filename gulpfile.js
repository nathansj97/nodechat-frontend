var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var concatcss = require('gulp-concat-css');
var del = require('del');
var ngannotate = require('gulp-ng-annotate');

gulp.task('minify:js', ['clean'], function(){
    return gulp.src(['src/js/app.js','src/js/**/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(ngannotate())
        .pipe(uglify({mangle: true}))
        .pipe(gulp.dest('wwwroot/'));
});

gulp.task('minify:css', ['clean'], function(){
    return gulp.src('src/css/*.css')
        .pipe(concatcss('styles.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('wwwroot/'));
});

gulp.task('copy:html', ['clean'], function(){
    return gulp.src(['src/html/views/*.html', 'src/html/views/partial/*.html'])
        .pipe(gulp.dest('wwwroot/'));
});

gulp.task('clean', function(){
    return del('wwwroot/**/*.*');
});

gulp.task('install', ['copy:html', 'minify:js', 'minify:css']);