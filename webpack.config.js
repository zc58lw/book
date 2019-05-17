var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        index:'./index.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name]_[hash].js"
    },
    devServer:{
        host: '127.0.0.1',
        inline:true,
        https: true,
        port: 9000, // 启动端口默认8080
        hot: true, // 是否启动热模块替换,(启用下也会启用自动刷新)
        proxy:[{
            context: ['/auth', '/api'],
            target: 'http://localhost:3000',
        }], // 设置请求代理
        open: true, // 启动后是否自动打开默认浏览器
        //指定打开浏览器时的导航页面。
        openPage: '',
        //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
        overlay:true,
        //允许浏览器使用本地 IP 打开。
        // useLocalIp:true,
        watchOptions:{} // 和watch模式下的相同
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            chunks:['index'],
            filename:'index.html',
            template:'index.html'
        }),
        new CleanWebpackPlugin()
    ]
};