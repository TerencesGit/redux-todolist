const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
	entry: [
				'webpack/hot/dev-server',
				'webpack-dev-server/client?http://localhost:8080',
				'./src/index',
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	module: {
		loaders: [{
			text: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel?presets[]=es2015&presets[]=react']
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin()
	]
}