var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var argv = require('yargs').argv;

var webroot = argv.f || 'final';

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './' + webroot + '/'
        }
    });
});

