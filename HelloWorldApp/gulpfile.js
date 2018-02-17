/// <binding Clean='clean' />
"use strict";

/* Модули проекта */
var gulp = require('gulp');
var cache = require('gulp-cached');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notifier = require('node-notifier');
var replace = require('gulp-replace');

var config = { 
    CSSProjectSRC: [
        "AppCSS/app.sp.css",
        "AppCSS/app.css",
        "AppCSS/**/*.css",
        "App/css/*.css"      
    ], 
    ControlProjectServerPath: 'C:/Users/sa-spsetup-4/Source/Repos/HelloWorldApp/HelloWorldApp/wwwroot'

};

/* Главная задача */
gulp.task('all:watch', function () {
    gulp.watch(config.CSSProjectSRC, ['css:send-to-server']);  
});

/* CSS */
gulp.task('css:send-to-server', function () {
    gulp.src(config.CSSProjectSRC)      
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.ControlProjectServerPath, { "mode": "0777" }));

    notifier.notify({
        'message': 'css:send-to-server'
    });
});
