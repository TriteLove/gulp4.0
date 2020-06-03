const { task, parallel } = require("gulp");
const { lessWatch, lessBuild } = require("./gulp/less");
const { scriptBuild, scriptWatch } = require("./gulp/script");

/**
 * task watch
 */
task("watch:less", lessWatch);
task("watch:script", scriptWatch);
task("watch", parallel(lessWatch, scriptWatch));

/**
 * task build
 */
task("build:less", lessBuild);
task("build:script", scriptBuild);
task("build", parallel(lessBuild, scriptBuild));
