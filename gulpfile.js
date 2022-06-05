'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./packages/theme-chalk/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(cssmin())
    .pipe(dest('./lib/theme-chalk'));
}

function copyfont() {
  return src('./packages/theme-chalk/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/theme-chalk/fonts'));
}

exports.build = series(compile, copyfont);
