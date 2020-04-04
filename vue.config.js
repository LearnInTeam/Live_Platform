module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // productionSourceMap: false,
  devServer: {
    port: 9210,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // target host
        ws: true,  // proxy websockets 
        changeOrigin: true,  // needed for virtual hosted sites
        pathRewrite: {
          '^/api': '/'  // rewrite path
        }
      }
    }
  }
}