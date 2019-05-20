const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index:'./app.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name]_[hash].js"
    },
    devServer:{
        host: 'localhost',
        inline:true,
        https: true,
        port: 9000, // 启动端口默认8080
        hot: true, // 是否启动热模块替换,(启用下也会启用自动刷新)
        contentBase: './dist',
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
        watchOptions:{
            ignored: ['node_modules']
        } 
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
            },
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8096
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                  loader: 'html-loader'
                }
            } 
        ]
    },
    watchOptions: {
      poll: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            chunks:['index'],
            filename:'index.html',
            template:'index.html'
        })
    ]
};