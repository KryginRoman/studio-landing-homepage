const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('./app/scss/common.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('min-libs', function() {
  return gulp.src('./app/script/libs/**/*.js')
  .pipe(concat('lib.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./app/script'));
});

gulp.task('css-libs', function() {
  return gulp.src('./app/scss/libs/lib.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
  gulp.watch('./app/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./app/script/libs/**.*js', gulp.parallel('min-libs'));
});

gulp.task('default', gulp.parallel('css-libs', 'sass', 'min-libs', 'watch'));