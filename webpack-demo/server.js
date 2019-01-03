const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

//告知express要使用webpack-dev-middleware和webpack.config.js
//配置基础文件
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

//服务将在端口3000启动
app.listen(3000,function () {
    console.log("Server is Running on port 3000!\n");
});