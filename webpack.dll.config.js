/*
* @desc 静态公共资源打包配置
*/


const path = require('path')
const webpack = require('webpack')

const src = path.resolve(process.cwd(), 'src'); // 源码目录
const evn = process.env.NODE_ENV == "production" ? "production" : "development";

const vendors = [
    'antd',
    'axios',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
];

module.exports = {
    mode: 'production',
    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        dll: vendors
    },
    
    output: {
        path: __dirname + "/dist/public",
        filename: 'dll.js',
        publicPath:'../'
    },
    
    plugins: [
        new webpack.DllPlugin({
            //// 定义程序中打包公共文件的入口文件vendor.js
            //context: process.cwd(),
            
            // manifest.json文件的输出位置
            path: __dirname + "/dist/public/manifest.json",
            
            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]_[hash]'
        })
    ]
}