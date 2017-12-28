﻿//var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
    entry: "./App/js/site.jsx", // входная точка - исходный файл
    output: {
        path: "./wwwroot",     // путь к каталогу выходных файлов - папка public
        filename: "bundle.js"       // название создаваемого файла
    },
    devtool: 'source-map',
    //target: 'node', // in order to ignore built-in modules like path, fs, etc.
    //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    resolve: {       
        extensions: ["", ".js", ".jsx"] // расширения для загрузки модулей
    },
    module: {
        loaders: [   //загрузчики
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /node_modules/,
                loader: ["babel-loader"],
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
}