let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("./dist"), //path必须是绝对路径
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: "url-loader"
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve("src")
        }
    }
};
