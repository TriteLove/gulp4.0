exports.globs = {
  style: {
    source: ["./less/**/*.less", "!./css/index.less"],
    target: "./dist/css/",
  },
  script: {
    source: ["./script/**/*.js"],
    target: "./dist/js/",
  },
};
