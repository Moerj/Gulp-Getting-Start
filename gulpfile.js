var gulp = require('gulp');

// 语法编译
var jade = require('gulp-jade');//jade模板编译
var sass = require('gulp-sass');//sass编译

// 压缩与合并
var minifycss = require('gulp-minify-css');//css压缩
var uglify = require('gulp-uglify');//js压缩
// var concat = require('gulp-concat');//文件合并,可由webpack替代
var rename = require('gulp-rename');//文件更名
var notify = require('gulp-notify');//提示信息

// webpack
var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var webpack = require('webpack-stream');

// 同步刷新浏览器
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 定义资源路径
var sassSrc = './src/sass/**/*.scss';
var jadeSrc = './src/jade/**/*.jade';
var jsSrc = './src/js/**/*.js';


// =================================
// 开始配置
// =================================


// 在gulp中执行webpack
// webpack-stream方式
gulp.task('webpack', function() {
    return gulp.src('src/js/entry.js')
      .pipe(webpack({
        /* config */
        plugins: [commonsPlugin],
        output: {
            filename: '[name].js'
        },
        module: {
            //加载器配置
            loaders: [
                {test: /\.css$/, loader: "style!css"},
                {test: /\.scss$/, loader: "style!css!sass"}
            ]
        }
      }, null, function(err, stats) {
        /* Use stats to do more things if needed */
        // console.log(stats);
      }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/'));
});

// =================================
// 将webpack打包好后的资源，交给gulp处理
// =================================

// sass
gulp.task('sass', function () {
    gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true}));
});

// jade
gulp.task('jade', function() {
     gulp.src('./src/jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/pages/'));
});


gulp.task('default', ['webpack','sass','jade'], function() {

    browserSync.init({
        // files: "**",
        files: ["./sass/*.scss","./src/**/*.jade","./src/**/*.js"],

        // 动态站点
        // proxy: "localhost:8080/xph/index.action"

        // 静态站点
        server: {
            baseDir: "./",
            index: "dist/pages/index.html"
        }
    });

    gulp.watch(jsSrc, ['webpack']);
    gulp.watch(sassSrc, ['sass']);
    gulp.watch(jadeSrc, ['jade']);
});
