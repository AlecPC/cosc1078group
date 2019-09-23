const path = require("path");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/',
  outputDir: path.resolve(__dirname, 'docs'),
  // assetsDir: '/'
}
