
const path = require("path");
module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['jsx-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  }
};
