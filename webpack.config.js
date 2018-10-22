module.exports = {
    entry: "./js/index.js",
    output: {
      filename: "bundle.js"
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    watch:true
  }