const path = require('path');

module.exports = {
  name: 'blogSetting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['.js', '.jsx', '.css'],
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        include: [require.resolve('@ant-design/icons')],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  },
};
