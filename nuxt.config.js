
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  router:{
    base:'/home/'
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    [
      'nuxt-i18n',
      {
        locales:['en','tc'],
        defaultLocale:'en',
        vueI18n:{
          fallbackLocale:'en',
          messages:{
            en:{
              greetings:'You have received Hello from RockLeon!',
              profile:'Profile',
              firstLineLand:'Hi there, this is my portfolio websites.',
              secondLineLand:'Hope you guys enjot it!',
            },
            tc:{
              greetings:'RockLeon向你揮揮手：「你好啊!」',
              profile:'簡介',
              firstLineLand:'「這是我的作品集網站」',
              secondLineLand:'「希望你們可以玩得開心、看得開心XD」',
            }
          }
        }
      }
    ],
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
