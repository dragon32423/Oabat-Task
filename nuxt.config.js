import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - Onboarding',
    title: 'Oabat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Parts of our css that are globalF
  css: [
    '@/assets/_typography',
    '@/assets/_shadows',
    '@/assets/_vuetifycomponents',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      font: {
        family: 'europa',
      },
      icons: false,
    },
    icons: {
      iconfont: 'md',
    },
    treeShake: true,
    customVariables: ['@/assets/_vuetifyvariables.scss'],
    theme: {
      primary: '#2BAEE8',
      secondary: '#D679C7',
      accent: '#777777',
      error: '#d84436',
      warning: '#f6a825',
      info: '#3d96f3',
      success: '#369d58',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
