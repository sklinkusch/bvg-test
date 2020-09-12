const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")

module.exports = (env, argv) => {
  return {
    entry: {
      main: "./src/index.js",
      style: "./src/styles.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    module: {
      rules: [
        // babel
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        // style and css extract
        {
          test: /\.scss$/,
          exclude: /(node_modules)/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle:
                    argv.mode === "production" ? "compressed" : "expanded",
                },
              },
            },
          ],
        },
        // image-file loader
        {
          test: /\.(png|jpg|gif)%/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/img/",
                publicPath: "../img/",
              },
            },
          ],
        },
        // fonts
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/fonts/",
                publicPath: "../fonts",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: "./.env",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        title: "Setting up Webpack 4",
        template: "index.html",
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: { baseDir: ["dist"] },
      }),
    ],
    performance: {
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000,
    },
  }
}
