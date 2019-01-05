const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry:'./src/index.js',//入口文件
    //webpack入口文件分离
    entry:{
        // app:'./src/index.js',
        // print:'./src/print.js'
        app:'./src/index.js'
    },
    devtool:'inline-source-map',//定位错误位置
    devServer:{                 //实时重新加载
        contentBase:'./dist',
        hot:true                //热替换
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        //热替换增加的webpack方法
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{//输出文件
        // filename:'bundle.js',//文件名称
        //出口文件不再是固定的bundle文件
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),//文件路径
        publicPath:'/'
    },
    // module:{
    //     rules:[
    //         //加载校验css文件
    //         {
    //             test:/\.css$/,//正则判断是否css文件
    //             use:[
    //                 'style-loader',//安装的style插件
    //                 'css-loader'//安装的css插件
    //             ]
    //         },
    //         //校验图片
    //         {
    //             test:/\.(png|svg|jpg|gif)$/,//正则检验图片类型
    //             use:[
    //                 'file-loader'//使用安装的插件
    //             ]
    //         },
    //         //检验字体
    //         {
    //             test:/\.(woff|woff2|eot|ttf|otf)$/,//正则判断字体类型
    //             use:[
    //                 'file-loader'
    //             ]
    //         },
    //         //校验导入的数据
    //         {
    //             test:/\.(csv|tsv)$/,
    //             use:[
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test:/\.xml$/,
    //             use:[
    //                 'xml-loader'
    //             ]
    //         },
    //     ]
    // }
};