"use strict";
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bsync = require('browser-sync').create()
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const rm = require("gulp-rm");
const imagemin = require("gulp-imagemin");
const webp = require('gulp-webp');

// Task for all scss files in scss directory
function scss() {
  return src('./src/scss/**/*.scss', { sourcemaps: true })
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([cssnano()]))
  .pipe(dest('./src/css', { sourcemaps: true }))
};

// Task for all CSS files in css directory
function css() {
  return src('./src/css/**/*.css', { sourcemaps: true })
   .pipe(postcss([cssnano()]))
   .pipe(dest('./dist/css', { sourcemaps: '.' }))
}

// Task for all JS files
function javascript() {
  return src('./src/js/**/*.js', { sourcemaps: true })
  .pipe(terser())
  .pipe(dest('./dist/js', { sourcemaps: '.' }))
};

// Task for all HTML files and images in img directory
function copy() {
  return src('./src/{**/*.html,images/*}')
  .pipe(dest('./dist', { sourcemaps: '.' }))
}

// Task for all files in dist directory
function clean() {
  return src('./dist/**/*', { sourcemaps: true }).pipe(rm())
};

// Optimizing images
function image() {
  return src('./src/assets/images/*')
  .pipe(imagemin([
    imagemin.mozjpeg({ quality: 80, progressive: true }),
    imagemin.optipng({ optimizationLevel: 2 }),
  ]))
  .pipe(dest('./dist/assets/images'))
}

function webimage() {
  return src('./src/assets/images/*')
  .pipe(webp())
  .pipe(dest('./dist/assets/images'))
}

// browsersync server
function server(done) {
  bsync.init({
    server: {
      baseDir: './src'
    },
    notify: false
  });
  // Reload page if HTML and JS files changed
  watch("./src/**/*.{html,js}").on("change", bsync.reload);
  // Run "scssTask" task if SCSS files changed
  watch("./src/scss/**/*.scss", series(scss));
  done();
}

// Default Gulp task
exports.default = series(
  scss,
  server
);

// Gulp build
exports.build = parallel(
  clean,
  copy,
  javascript,
  css,
  image,
  webimage
);
