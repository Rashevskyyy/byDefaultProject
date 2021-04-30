let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'; // проверка режима разработки, будет возвращать true если совпало
const isProd = !isDev; // проверка режима разработки, будет возвращать true если предыдущее false

// функция для наименования файлов в зависимости от мода который выбран
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: 'development',
    entry:  {
        main: './src/frontend/js/script.js',
        module: './src/frontend/mods/welcome.js'
    },
    output: {
        filename: `./src/js/${filename('js')}`, // генерация названия файлов из функции
        library: 'dist', // путь, куда всё сложится
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 7070,
    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
        },
    },

    plugins: [
        new MiniCssExtractPlugin({
           filename: `./src/scss/${filename('css')}`
        }),
        new HTMLPlugin({   
            filename: 'index.html',
            template: './src/frontend/index.html',  // путь к файлу html
            minify: {
                collapseWhitespace: isProd,  // в режиме продакшена уберуться все пробелы для сжатия проекта
            },
        }),
        new CopyPlugin({
            patterns: [{from:'./src/frontend/img', to: './src/img'}]  // копируем картинки
        }),
        new CopyPlugin({
            patterns: [{from:'./src/frontend/fonts', to: './src/fonts'}]    // копируем шрифты
        }),
        new CleanWebpackPlugin(),  // очистка старых файлов, подгрузка новых
    ],
    
    devtool: isProd ? false : 'source-map',   // в режиме разработки показывает где записана та или иная строка в исходном коде

    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader']     // пропускаем js через babel
            },

            {
                test: /\.html$/i,
                loader: 'html-loader',  // динамический загрузчик html
            },

            {
                test: /\.s[ac]ss$/i,       // загрузчики стилей Scss. Работа начинается с конца. Scss --> css --> folder
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] 
            },

        ]
    },
};