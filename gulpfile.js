const {  task, parallel } = require("gulp");
const { lessWatch, lessBuild, lessClean } = require('./gulp/less');
const { scriptBuild, scriptWatch, scriptClean } = require('./gulp/script');

/**
 * Task
 */
task("watch", parallel(lessWatch, scriptWatch));
task("clean", parallel(lessClean, scriptClean));
task("build", parallel(lessBuild, scriptBuild));
