var path = require("path"),
    webpack = require("webpack");
module.exports = {
    entry: './src/es6/index.js',
    output: {
        filename: './www/js/bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.js'],
        root: [path.join(__dirname, "bower_components")]
    },
    // module: {
    //     loaders: [
    //         // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
    //         { test: /\.ts?$/, loader: 'ts-loader' }
    //     ]
    // }
    devtool: "inline-source-map",
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ],
}
