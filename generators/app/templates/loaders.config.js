module.exports = [
    {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader'
        ]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader'
        ]
    },
    {
        test: /\.less$/,
        loader: 'style!css!less'
    }
]
