const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function styles() {
  return gulp
    .src('./src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/images/**/*').pipe(gulp.dest('./dist/images'));
}

function scripts() {
  return gulp
    .src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function watchFiles() {
  gulp.watch('./src/styles/**/*.scss', styles);
  gulp.watch('./src/images/**/*', images);
  gulp.watch('./src/scripts/*.js', scripts);
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = watchFiles;
