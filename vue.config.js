const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => { //合并webpack配置 vue-cli核心就是webpack webpack的核心=>node
        config.resolve.alias
            .set('$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
    },
    devServer: {
        port: 8084, //设置项目端口号
        host: "0.0.0.0", //允许所有的主机访问当前项目
        proxy: {
            '/api': {
                //正则匹配到以这个开头的时候 就用代理
                target: "http://chst.vip:1902", // 指向的是目标服务器
                pathRewrite: { //路径重写
                    '^/api': ""
                }
            }
        }
    }
};
// http://chst.vip:1902/api/students/getstulist
// http://chst.vip:1902/students/getstulist