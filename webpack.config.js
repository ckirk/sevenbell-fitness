module.exports = {
	entry: "./app/main.js",
	output: {
		path: './app/bundle',
		filename: 'bundle.js'
	},
	devServer: {
	  inline: true,
	  contentBase: './app',
	  port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loader: 'babel'
			},
			{
        test: /\.json$/,
        loader: 'json-loader'
      },

			// Fone-Awesome Loaders
			{
				test: /\.css$/,
				loader: 'style!css?sourceMap'
			}, {
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	plugins: [
    // new S3Plugin({
    //   // Only upload css and js
    //   include: /.*\.(js)/,
    //   // s3Options are required
    //   s3Options: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //   },
    //   s3UploadOptions: {
    //     Bucket: 'test.vistawatt.com'
    //   }
    // })
  ],
};
