export default defineNuxtConfig({
  image: {
    quality: 80,
    format: ['webp', 'jpeg']
  },

  // experimental: {
  //   componentIslands: true,
  // },
  site: {
    name: '',
    url: ''
  },
  extends: '@nuxt/ui-pro',

  devtools: {
    enabled: true, // dynConfig.devtools,
    timeline: {
      enabled: false
    }
  },

  telemetry: false,

  app: {

  },

  content: {
    experimental: {
      search: undefined
    },
    // navigation: false,
    locales: ['de', 'en'],
    //documentDriven: false,
    highlight: {
      preload: ['xml', 'python', 'powershell', 'bash', 'php', 'yaml', 'html', 'js', 'sql'],
      // theme: {
      //   default: 'solarized-light',
      //   dark: 'dark-plus'
      // }
    }
  },

  routeRules: {
    // '/_ipx/**': { prerender: true, cache: { maxAge: 60 * 60 } },

    // '/course/list': { prerender: true },
    //'/course/**': { isr: 60, cache: { maxAge: 60 * 10 } },
    //'_/nuxt/**' :  { cache: { maxAge: 60 * 10 } },
    '_/vercel/**': { cache: { maxAge: 60 * 10 } },
    //'/api/courses/list': { cache: { maxAge: 60 * 10 } },
  },

  aos: {
    offset: 120,
    once: true
  },


  modules: [
    'nuxt-og-image',
    'nuxt-time',
    'nuxt-gtag',
    'nuxt-aos',
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxtjs/google-fonts',
    // '@nuxtjs/plausible'
    "@nuxt/image"
  ],

  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ]
  },


  ui: {
    icons: 'all'
  },

  fontMetrics: {
    fonts: ['DM Sans']
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },



  runtimeConfig: {

  },

  hooks: {
    // Related to https://github.com/nuxt/nuxt/pull/22558
    // Adding all global components to the main entry
    // To avoid lagging during page navigation on client-side
    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global) { comp.global = 'sync' }
      }
    }
  },

  compatibilityDate: '2024-07-03'
})