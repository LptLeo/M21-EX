const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function scriptsMin() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function stylesMin() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function imagesMin() {
    return gulp.src('./src/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(stylesMin, imagesMin, scriptsMin)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(stylesMin))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scriptsMin))
    gulp.watch('./index.html')
}