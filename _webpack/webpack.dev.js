const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require('path');

module.exports = merge(common, {
  mode: "development",

  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 9000,
  },

  devtool: 'inline-source-map',
});
