const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common,{
    mode: "production",
    output: {
        filename: "[name].[hash].js",
        libraryTarget: "umd",
        umdNamedDefine: true,
        path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
          {
              test: /\.s?[ac]ss$/,
              exclude: "/node_modules/",
              use: [
                  MiniCssExtractPlugin.loader,
                  {
                      loader: "css-loader",
                      options: { sourceMap: true, importLoaders: 2, url: true }
                  },
                  {
                      loader: "postcss-loader",
                      options: {
                          plugins: () => [
                              require("autoprefixer")
                          ],
                      }
                  },
                  "sass-loader"
              ]

          },
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": "\"production\"",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css"
        }),
    ],
    optimization: {
        mangleWasmImports: true,
        mergeDuplicateChunks: true,
        minimize: true,
        nodeEnv: "production",
        splitChunks: {
            cacheGroups: {
                js: {
                    test: /\.js$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 7,
                },
                css: {
                    test: /\.s?[ac]ss$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                }
            }
        }
    }
});