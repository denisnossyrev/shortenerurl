const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpackConfig = {
    entry: ["core-js/fn/promise","./src/app.js"],
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                exclude: path.resolve(__dirname, './node_modules'),
                test: /\.js$/
            },
            {
                loaders: ["style-loader","css-loader"],
                test: /\.css$/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.ejs"
        })
    ]
};

// export default webpackConfig;
module.exports = webpackConfig;

