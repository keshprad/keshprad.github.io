import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(title) {
      return title ? `${title} | keshprad` : 'keshprad'
    },
    title: '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'My portfolio site' },
      { name: 'author', content: 'Keshav Pradeep' },
      {
        name: 'keywords',
        content:
          'keshprad, keshprad.ml, Keshav Pradeep, Rishi Keshav Pradeep, Portfolio, Resume,',
      },
      { property: 'og:image', content: '/favicon.ico' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // serverMiddleware: ['~/middleware/redirects.js'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // ngrok
    '@nuxtjs/ngrok',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // https://content.nuxtjs.org/api/configuration
  nuxt: {},

  // ngrok module congiguration
  ngrok: {
    // module options
    auth: process.env.NGROK_AUTH,
    region: 'us',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        dark: {
          primary: colors.lightBlue.darken1, // #039BE5
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          anchor: colors.lightBlue.darken1, // #039BE5
          background1: '#121212',
          background2: colors.grey.darken4,
          background3: '#191919',
          text1: colors.shades.white,
          text2: colors.grey,
        },
        light: {
          primary: colors.lightBlue.darken1, // #039BE5
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          anchor: colors.lightBlue.darken1, // #039BE5
          background1: '#fcfcfc',
          background2: colors.grey.lighten3,
          background3: colors.grey.lighten3,
          text1: colors.grey.darken3,
          text2: colors.grey.darken1,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    fallback: '404.html',
  },
}
