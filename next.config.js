const path = require('path')

module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  env: {
    BE_HOST: process.env.BE_HOST,
  },
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'de',
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['huberfenster.kliqs.tk'] 
  }
}
