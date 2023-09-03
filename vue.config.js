const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Adjust publicPath for GitHub Pages deployment
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bard-kt-sample-pwa/'
    : '/'
});