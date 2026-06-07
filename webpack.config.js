const path = require('path');
const webpack = require('webpack');

const commonConfig = {
  mode: 'development',
  resolve: {
    fallback: {
      "fs": false,
      "fs/promises": false,
      "path": false
    }
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^node:/,
      (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};

module.exports = [
  Object.assign({}, commonConfig, {
    name: 'app',
    entry: './target/index.js',
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: 'libs.js',
      library: 'libs',
      libraryTarget: 'var'
    },
  })
];
