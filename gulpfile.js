var gulp = require('gulp'),
    server = require('gulp-develop-server'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');


var devPath = {
    client: 'public/es6/*',
    server: ['router/**/*.js'],
    index: 'app.js',
    serverStart: 'app.es6.js'
}
var outPath = {
    client: 'public/js/'
}

// gulp.task('server:translate', ['server'], function() {
//     return gulp.src(devPath.index)
//             .pipe(sourcemaps.init())
//             .pipe(babel())
//             .pipe(rename(devPath.serverStart))
//             .pipe(sourcemaps.write())
//             .pipe(gulp.dest('./'));
// })

// gulp.task('server', function() {
//     return gulp.src(devPath.server)
//             .pipe(sourcemaps.init())
//                 .pipe(babel())
//             .pipe(sourcemaps.write())
//             .pipe(gulp.dest('bin/'));
// })

// gulp.task('server:start', ['server:translate'], function() {
//     server.listen({
//         path: devPath.serverStart,
//         execArgv: [ '--harmony' ]
//     });
// })

// gulp.task('server:restart', function() {
//     gulp.watch([devPath.serverStart], server.restart);
// })