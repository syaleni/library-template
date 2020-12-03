const path = require('path');

const config = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
};

module.exports = config;
