var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });


var devPath = {
    client: 'public/es6/*',
    server: ['router/**/*.js'],
    index: 'app.js',
    serverStart: 'app.es6.js',
    less: 'public/less/**/*.less'
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

gulp.task('client', ['less']);

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