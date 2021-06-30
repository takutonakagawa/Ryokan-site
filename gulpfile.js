'use strict'

var { src, watch, dest, series } = require('gulp');
var sass = require('gulp-sass');


const sassBuild = (done) => {
  src('./scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(dest('./css'));
  done();
};

const watchScss = () => {
  watch('./scss/*.scss', sassBuild);
};


exports.default = series(sassBuild, watchScss);
exports.build = sassBuild;
