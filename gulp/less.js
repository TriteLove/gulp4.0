const { watch, src, dest, series } = require("gulp");
const del = require("del");
const less = require("gulp-less");
const clean = require("gulp-clean-css");
const { source, target } = require("./config").globs.style;

function lessCompile() {
  return src(source, { sourcemaps: true })
    .pipe(less())
    .pipe(dest(target, { sourcemaps: "." }));
}

function lessCompileWithClean() {
  return src(source).pipe(less()).pipe(clean()).pipe(dest(target));
}

function lessWatch() {
  return watch(source, { ignoreInitial: false }, lessCompile);
}

function cssClean() {
  return del(target);
}

exports.lessWatch = lessWatch;
exports.lessClean = cssClean;
exports.lessBuild = series(cssClean, lessCompileWithClean);
