var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('js', function() {
  return gulp.src([
    'src/taira.multiselect.js',
  ])
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['clean'], function () {
  gulp.watch('src/taira.multiselect.min.js', ['js']);
});

gulp.task('clean', function(cb) {
  del(['dist/taira.multiselect.min.js'], cb())
});

gulp.task('default', ['clean'], function() {
    gulp.start('js', 'watch');
});