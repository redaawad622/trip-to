module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova',
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true,
    },
  },

  pwa: {
    themeColor: '#1b3065',
    appleMobileWebAppStatusBarStyle: '#1b3065',
    manifestOptions: {
      background_color: '#fff',
    },
    name: 'Trip To',
  },
};
