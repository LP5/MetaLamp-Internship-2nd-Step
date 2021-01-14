const path = require('path');
const webpack = require('webpack');




/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");



/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

const workboxPlugin = require('workbox-webpack-plugin');




/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');




module.exports = {
  mode: 'production',

  plugins: [new PrettierPlugin(), new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
            template: './src/index.pug'
          }), new workboxPlugin.GenerateSW({
          swDest: 'sw.js',
          clientsClaim: true,
          skipWaiting: false,
        })],

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true
            }
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates 'style' nodes from JS stings
          "style-lodaer",
          // Translates CSS into CommonJS
          "css-loader",
          // Complies SASS into CSS
          "sass-loader"
        ]
      },
    ]
  },

  devServer: {
    open: true
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      chunks: 'all'
    }
  }
}
