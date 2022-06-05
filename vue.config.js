require('events').EventEmitter.defaultMaxListeners = 0;
const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');

module.exports = {
  publicPath: isDevelopment ? './' : '/sim-view/',
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'sim-view',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      chunksSortMode: 'manual',
    },
  },
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: '8078',
    // proxy, // 代理
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'examples'),
      },
    },
  },
};
