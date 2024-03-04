// ****** START:: IMPORTING LOCALES FILES ****** //
import arLocales from './locales/ar-AR.js'
import enLocales from './locales/en-US.js'
// ****** END:: IMPORTING LOCALES FILES ****** //

// import colors from 'vuetify/es5/util/colors'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: 'ar',
    },
    // titleTemplate: 'Captain One',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // ****** START:: IMPORTING MAIN SCSS STYLES ****** //
    '@/assets/sass/main.scss',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    // ****** END:: IMPORTING MAIN SCSS STYLES ****** //

    // "animate.css",
    // 'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    // 'izitoast/dist/css/iziToast.css',
  ],

  script: [
    // ****** START:: IMPORTING BOOTSTRAP SCRIPT FILE ****** //
    '@bootstrap.bundle.min.js',
    // ****** END:: IMPORTING BOOTSTRAP SCRIPT FILE ****** //
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vee-validate' },
    '@/plugins/axios',
    // ****** START:: IMPORTING MAIN SCRIPT FILE ****** //
    '@/plugins/main.js',
    // ****** END:: IMPORTING MAIN SCRIPT FILE ****** //

    // ****** START:: IMPORTING ANT-DESIGN FILE ****** //
    '@/plugins/antd-ui.js',
    // ****** END:: IMPORTING ANT-DESIGN FILE ****** //

    // ****** START:: IMPORTING AOS FILE ****** //
    '@/plugins/aos.js',
    // ****** END:: IMPORTING AOS FILE ****** //

    // ****** START:: IMPORTING FONT AWESOME FILE ****** //
    { src: '@/plugins/font-awesome.js' },
    // ****** END:: IMPORTING FONT AWESOME FILE ****** //

    { src: '@/plugins/slick-carousel.js', ssr: false },

    // ****** START:: IMPORTING V-OWL CAROUSEL FILE ****** //
    { src: '@/plugins/v-owl.js', ssr: false },
    // ****** END:: IMPORTING V-OWL CAROUSEL FILE ****** //
    {
      src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // '@nuxt/image',

    // ===== END:: PROJECT MODULES
    [
      'nuxt-i18n',
      {
        locales: [{
          name: 'عربي ',
          code: 'ar',
          iso: 'ar-AR',
          file: 'ar-AR.js',
          dir: 'rtl',
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js',
          dir: 'ltr',
        },
        ],
        lazy: true,
        langDir: 'locales/',
        vueI18n: {
          locale: 'en',
          fallbackLocale: 'en',
        },
        defaultLocale: 'ar',
        detectBrowserLanguage: false,
      },
    ],
    // "@bootstrap/dist/js/bootstrap.js",
  ],

  // image: {
  //   staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  // },

  styleResources: {
    scss: [
      '@/assets/sass/abstracts/_mixins.scss',
      '@/assets/sass/abstracts/_variables.scss',
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://backend..com',

    headers: {
      common: {
        'cache-control': 'cache-control',
        Accept: 'application/json',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  // },
  router: {
    mode: 'history',
    base: '/website'
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3,
    //     },
    //   },
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: false,
    transpile: ['vee-validate/dist/rules'],
  },


  server: {
    port: 5022,
  },
  // env: {
  //   baseUrl: process.env.baseUrl || '',
  // },
}
