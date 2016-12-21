const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {

    entry: {
        app: './src/ui/main.ts'
    },
    output: {
        path: './dist/app/',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.js.map'
    },
    resolve: {
        extensions: [ '', '.ts', '.tsx', '.js' ]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                compress: { warnings: false },
                output: { comments: false }
            }
        ),
        new CopyWebpackPlugin(
            [
                {
                    context: './src',
                    from: '*.js'
                },
                { from: './src/ui/index.html' },
                {
                    context: 'src/ui',
                    from: '**/*.html',
                    ignore: 'index.html',
                    to: 'templates'
                },
                { from: './node_modules/zone.js/dist/zone.min.js' },
                { from: './node_modules/reflect-metadata/Reflect.js' }
            ]
        )
    ],
    target: 'electron-main'

};
