const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // html plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // css plugin

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },

    // Tell webpack to use html plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file
    ],

    module: {
        rules: [
            // Tell webpack to use "babel-loader" for .js and .jsx files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            // Files will get handled by css loader and then passed to the extract text plugin which will write it to the file defined above in plugins
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            }
        ],
    },

    //Enable importing JS files without specifying their's extenstion
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};