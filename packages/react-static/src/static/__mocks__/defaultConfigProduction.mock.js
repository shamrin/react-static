export default {
  siteRoot: '',
  basePath: '',
  assetsPath: '',
  prefetchRate: 5,
  inlineCss: false,
  outputFileRate: 100,
  extractCssChunks: false,
  entry: './root/src/index.js',
  paths: {
    ROOT: './root/',
    TEMP: './root/tmp',
    SRC: './root/src',
    DIST: './root/dist',
    ASSETS: './root/dist',
    PUBLIC: './root/public',
    PACKAGE: './root/package.json',
    NODE_MODULES: './root/node_modules',
    STATIC_DATA: './root/dist/staticData',
    HTML_TEMPLATE: './root/dist/index.html',
    LOCAL_NODE_MODULES: './dirname/../../node_modules',
  },
}
