module.exports = {
  entry: {
    koans: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    stats: 'minimal'
  }
};
