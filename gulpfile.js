var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var argv = require('yargs').argv;

var webroot = './';
var folder = argv.f || '';

if (folder) {
  webroot = webroot + folder + '/';
}

// Static server
gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: webroot
      }
  });

  gulp.watch(['./**/*.html', './**/*.css']).on('change', browserSync.reload);
});
