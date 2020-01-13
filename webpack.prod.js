var webpack = require('webpack');
require('dotenv').config();

// To merge common, dev, and prod config files
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// js minification
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// upload contents of /build directory directly to S3
var S3Plugin = require('webpack-s3-plugin');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),

    // This seems to be broken now... disabling and uploading to S3 manually
    // new S3Plugin({
    //   // Exclude uploading of html
    //   exclude: /.*\.html$/,
    //   // s3Options are required
    //   s3Options: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    //   },
    //   s3UploadOptions: {
    //     Bucket: process.env.BUCKET
    //   }
    // })
  ]
});
