const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require(`copy-webpack-plugin`);

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        port: 1337,
        historyApiFallback: true
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            }
        },
        {
            test:/\.scss$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
             ]
        },
        {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          },
          {
            test: /\.(svg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/'
                }
              }
            ]
          }
        ],
    },
    plugins: [
        new miniCss({
           filename: 'style.css',
        }),
        new CopyPlugin({
          patterns: [
            { from: "src/index.html", to: "" },
          ],
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
