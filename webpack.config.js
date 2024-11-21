const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development', // Define o modo como "development"
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Adiciona o carregamento de arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Corrigido para apontar para a pasta correta
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
