var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// sass
gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(reload({stream: true}));
});


// jade
gulp.task('jade', function() {
     gulp.src('./jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
});



gulp.task('default', ['sass','jade'], function() {

    browserSync.init({
        // files: "**",
        files: ["css/.*.css","./**/*.html","./**/*.js"],

        // 动态站点
        // proxy: "localhost:8080/xph/index.action"

        // 静态站点
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./**/*.jade', ['jade']);
    gulp.watch("./**/*.jsp").on('change', reload);
});