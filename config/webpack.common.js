var helpers = require('./helpers');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var ENV = process.env.npm_lifecycle_event;

var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || isTestWatch;

var atlOptions = '';

if (isTest && !isTestWatch) {
    // awesome-typescript-loader needs to output inlineSourceMap for code coverage to work with source maps.
    atlOptions = 'inlineSourceMap=true&sourceMap=false';
}


module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [helpers.root('node_modules')]
    },

    module: {
        rules: [
            // Support for .ts files.
            // awesome-typescript-loader transpiles our Typescript code to ES5, guided by the tsconfig.json file
            // angular2-template-loader loads angular components' template and styles
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader?' + atlOptions, 'angular2-template-loader'],
                exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/]
            },

            // copy those assets to output
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader'
                }
            },

            // Support for *.json files.
            {test: /\.json$/, loader: 'json-loader'},

            // Support for CSS as raw text
            // use 'null' loader in test mode (https://github.com/webpack/null-loader)
            // all css in src/style will be bundled in an external css file
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: isTest ? 'null-loader' : ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader']
                })
            },
            // all css required in src/app files will be merged in js files
            {test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw-loader'},

            // support for .scss files
            // use 'null' loader in test mode (https://github.com/webpack/null-loader)
            // all css in src/style will be bundled in an external css file
            {
                test: /\.(scss|sass)$/,
                exclude: helpers.root('src', 'app'),
                loader: isTest ? 'null-loader' : ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader']
                })
            },
            // all css required in src/app files will be merged in js files
            {
                test: /\.(scss|sass)$/,
                exclude: helpers.root('src', 'style'),
                loader: 'raw-loader!sass-loader'
            },

            // support for .html as raw text

            {test: /\.html$/, loader: 'raw-loader', exclude: helpers.root('src', 'public')}
        ],
        noParse: /clarity-icons\.min\.js/

    },
    node: {
        fs: 'empty'
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        // providing context to Angular's use of System.import
        // https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src')
        ),

        new HtmlWebpackPlugin({
            template: 'src/public/index.html'
        })
    ]
};
