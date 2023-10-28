const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  devServer: {
    // 代理axios
    proxy: 'http://127.0.0.1:8080',
    // vue自己启动的端口
    port: 9222
    // client: {
    //   webSocketURL: 'ws://127.0.0.1:8080/ws'
    // }
  }
})
