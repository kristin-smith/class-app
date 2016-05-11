var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./node_modules/webpack/hot/only-dev-server.js',
		'./js/index.js'
	],
	output: { 
		path: __dirname + '/build', 
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['react-hot', 'babel-loader', 'babel'], exclude: /node_modules/ },
			{ test: /\.scss$/, loaders: ["style", "css", "sass"] }
		]
	},

	sassLoader: {
	    includePaths: [path.resolve(__dirname, "./scss/build")]
	},

	plugins: [
      new webpack.NoErrorsPlugin()
    ]

}

