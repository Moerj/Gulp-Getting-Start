var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/entry.js'
    },
    //入口文件输出配置
    output: {
        path: 'src/webpack_output',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};
