const path = require("path");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/cosc1078/',
  outputDir: path.resolve(__dirname, 'docs'),
  // assetsDir: '/'
}
