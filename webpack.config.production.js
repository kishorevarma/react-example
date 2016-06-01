var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: './js/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    
    resolve: {
        extensions: [ '', '.js' ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),//reduces the size 
        new webpack.NoErrorsPlugin(),  
        new webpack.DefinePlugin({  // Have used this plugin in AppDispatcher for action logging for development
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ //reduces the size
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'js')
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    }
};