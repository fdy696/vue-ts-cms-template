/* eslint-disable @typescript-eslint/no-var-requires */
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  configureWebpack: {
    // plugins: [
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // ],
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
