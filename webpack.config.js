var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./js/index'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/static'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //for hot reload
		new webpack.NoErrorsPlugin()
	],

	resolve: {
		extensions: ['', '.js']
	},

	module: {
		loaders: [{
			test:  /\.jsx?$/,
			loaders: ['react-hot', 'babel'], //react hot loader does the magic 
			include: path.join(__dirname, 'js')
		}, {
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}]
	}
};