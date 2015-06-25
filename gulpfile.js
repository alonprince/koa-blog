"use strict"

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    server = require('gulp-develop-server'),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["> 5%"] });


var devPath = {
    coffee: 'public/coffee/**/*.coffee',
    index: 'app.js',
    less: 'public/less/*.less',
    serverStart: 'app.js',
    conf: 'config/**/*.js',
    views: 'views/**/*.jade',
    img: 'public/img/',
    controllor: 'controllor/**/*.js',
    model: 'model/**/*.js',
    schemas: 'schemas/**/*.js',
    lib: 'lib/**/*.js'
}
var outPath = {
    client: 'public/js/',
    css: 'public/css/'
}

gulp.task('less', function() {
    return gulp.src(devPath.less)
            .pipe(less({
                plugins: [autoprefix]
            }))
            .pipe(gulp.dest(outPath.css));
})

gulp.task('coffee', function() {
    return gulp.src(devPath.coffee)
            .pipe(coffee())
            .pipe(gulp.dest(outPath.client));
})

gulp.task('client', ['less', 'coffee']);

gulp.task('server:start', function() {
    server.listen({
        path: devPath.serverStart
    });
})

var glob = [];

for(let i in devPath) {
    glob.push(devPath[i]);
}

gulp.task('server:restart', function() {
    var watcher = gulp.watch(glob, ['client']);
    watcher.on('change', server.restart);
})

gulp.task('server', ['server:start', 'server:restart']);

gulp.task('default', ['client', 'server']);