module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'dist/bundle.js',
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015'],
            }
        }],
    }
}
