var gulp = require('gulp');
var liveServer = require('live-server');

gulp.task('default', ['serve', 'watch']);

gulp.task('css', function () {

  var postcss = require('gulp-postcss');
  var tailwindcss = require('tailwindcss');

  return gulp.src('web/assets/css/main.css')
    // ...
    .pipe(postcss([
      // ...
      tailwindcss('tailwind.js'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('build/'));
});

gulp.task('serve', function () {
  liveServer.start({
    root: "build",
    open: false,
    file: "index.html"
  });
})

gulp.task('watch', function () {
  gulp.watch('web/assets/css/main.css', ['css']);
});