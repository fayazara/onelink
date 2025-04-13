import tailwindcss from '@tailwindcss/vite'

export default {
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/user'],
    }
  },

  build: {
    cssMinify: true,
    minify: 'terser',
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['@/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: undefined },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
        },
      ],
    },
  },

  modules: ['@nuxt/icon', '@nuxtjs/fontaine', '@vueuse/nuxt'],

  icon: {
    serverBundle: 'auto',
  },

  fontaine: {
    fallbacks: ['Open Sans'],
  },

  experimental: {
    renderJsonPayloads: true,
  },

  routeRules: {
    '/*.{svg,css,webp}': {
      swr: true,
      cache: {
        maxAge: 43200,
      },
    },
  },
}
