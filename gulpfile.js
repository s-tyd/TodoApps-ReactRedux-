var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfigs = require('./webpack.config.js');


gulp.task('compile', function () {
    return gulp.src([
        './src/js/index.js',
    ])
        //エラーが起きた際にpulumberで処理が止まらないようにする
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        //webpackを読み込み
        .pipe(webpackStream(webpackConfigs), null, function (err, stats) {
            if (stats.compilation.length > 0) {
                notify({
                    title: 'webpack err',
                    message: stats.compilation.errors[0].error
                });
            }
        })
        .pipe(gulp.dest('js'))
});

//sass
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError('Error:<% error.message %>')
        }))
        .pipe(sass())
        .pipe(gulp.dest('./css'))
});

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    watch(['./src/js/**/**.js'], function () {
        gulp.start(['compile']);
    });

    watch(['./src/sass/**/**.scss'], function () {
        gulp.start(['sass']);
    });

    watch(['./**/*.html', './js/**/*.js', './css/**/*.css'], function () {
        browserSync.reload();
    });
});

gulp.task('default', ['compile', 'sass', 'browser-sync', 'watch'])
