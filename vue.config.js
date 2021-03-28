// vue.config.js
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    outputDir: 'dist',

    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,

    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('ievent', resolve('src/components'))
    },

    // CSS 相关选项
    css: {
        extract: true,
        sourceMap: false,
        modules: false,
        loaderOptions: {
            sass: {
                // 根据自己样式文件的位置调整   -----------设置全局的scss变量和里面的@mixins
                data: `@import "@/assets/scss/_variable.scss";`
            }
        }
    },


    // 配置 webpack-dev-server 行为。
    devServer: {
        port: 8080,
        https: false,
        hotOnly: false,
        open:false
    },

}
