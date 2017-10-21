const path = require('path');

// Cleans out build folder after every build (leaves behind index.html)
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: "./app/main.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './build')
	},
	devServer: {
	  inline: true,
	  contentBase: './bundle',
	  port: 8080
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  use: 'babel-loader'
			},
			{
        test: /\.json$/,
        use: 'json-loader'
      },
			{
			 test: /\.(woff|woff2|eot|ttf|otf)$/,
			 use: [
				 'file-loader'
			 ]
		 }
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['app/build/'], { exclude: ['index.html'] }),
		new webpack.NamedModulesPlugin()
	]
};
