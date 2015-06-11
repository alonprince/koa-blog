var gulp = require('gulp'),
    rename = require('gulp-rename'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["> 5%"] });


var devPath = {
    coffee: 'public/coffee/**/*.coffee',
    server: ['router/**/*.js'],
    index: 'app.js',
    less: 'public/less/*.less'
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