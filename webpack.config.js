const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	app: path.join(__dirname,'app'),
	build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
  		app: ['babel-polyfill', PATHS.app]
  	},
  	output: {
  		path: PATHS.build
  	},
  	resolve: {
  		extensions: ['.js', '.jsx']
  	},
  	module: {
  		rules: [
  			{
  				test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
  			}, {
  				test: /\.css$/,
  				use: ['style-loader', 'css-loader']
  			}, {
  				test: /\.(js|jsx)$/,
  				use: [
  					{
  						loader: 'babel-loader',
  						options: {
  							cacheDirectory: true
  						},
  					}
  				]
  			}, {
          test: /\.svg$/,
          loader: 'url-loader'
      	}, {
   				test: /\.(eot|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  				loader: 'file-loader'
      	}, 
  		],
  	},
  plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html'
		}),
		new Webpack.HotModuleReplacementPlugin()
	]
};
