const { watch, src, dest, series } = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const { source, target } = require("./config").globs.script;

function scriptCompile() {
  return src(source, { sourcemaps: true })
    .pipe(babel())
    .pipe(dest(target, { sourcemaps: "." }));
}

function scriptCompileWithUglify() {
  return src(source).pipe(babel()).pipe(uglify()).pipe(dest(target));
}

function scriptWatch() {
  return watch(source, { ignoreInitial: false }, scriptCompile);
}

function scriptClean() {
  return del(target);
}

exports.scriptWatch = scriptWatch;
exports.scriptClean = scriptClean;
exports.scriptBuild = series(scriptClean, scriptCompileWithUglify);
