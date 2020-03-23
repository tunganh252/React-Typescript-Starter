const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name]/index.js",
    },
    module: {
        rules: [
            {
                loader: "source-map-loader",
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": "\"development\"",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: { // webpack-dev-server config
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/",
        port: 4000,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: false,
            publicPath: false,
        }
    },
    optimization: {
        mangleWasmImports: true,
        mergeDuplicateChunks: true,
        minimize: false,
        nodeEnv: "development",
    }
});