module.exports = {
  entry: __dirname + '/client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  mode: 'development'
}