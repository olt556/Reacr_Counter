
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './Main.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + './index.html',
		port: 3000,
	},
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/, 
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['es2015', 'react']
				  }
				}
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader?modules'],
      		}
		],
		// rules: [
		// 	{
		// 		test: /\.css$/, 
		// 		loaders: 'css-loader',
		// 		//exclude: /node_modules/,
		// 	},
		// ]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './index.html'})
	]
};
