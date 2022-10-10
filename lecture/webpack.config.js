const path = require('path')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry:{
        app: ['./client'],
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },
    plugins: [
        new RefreshWebpackPlugin({overlay:false}),
    ],
    output:{
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/build/',
    }, //출력
    devServer: {
        devMiddleware: {publicPath:'/build'},
        static: {directory: path.resolve(__dirname) },
        hot: true
    },
};