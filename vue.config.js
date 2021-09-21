module.exports = {
    devServer: {
        overlay: {
          warnings: true,
          errors: true
        }
      },
      lintOnSave: 'error',
    css: {
        requireModuleExtension: false
      },
      chainWebpack: config => {
        ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
          config.module.rule('sass').oneOf(match).use('sass-loader')
            .tap(opt => Object.assign(opt, { data: '@import \'~@/styles.scss\'' }))
        })
      },
}