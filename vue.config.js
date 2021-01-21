module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue-cli3中默认为src配置了一个 @ 的别名，我们可以直接使用
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views"
      }
    }
  }
}
