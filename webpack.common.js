const path = require("path");

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.tsx")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // alias path when build source
      "@components": path.resolve(__dirname, "src", "components"),
      "@containers": path.resolve(__dirname, "src", "containers"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@images": path.resolve(__dirname, "public", "assets", "images"),
      "@fonts": path.resolve(__dirname, "public", "assets", "fonts")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["module-resolver"]],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.s?[ac]ss$/,
        exclude: "/node_modules/",
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 2, url: true }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"),
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};
