// https://nuxt.com/docs/api/configuration/nuxt-config
// Restarting at 15:58
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // Debug log
  hooks: {
    'ready': () => { console.log('Nuxt Config Loaded! LangDir: locales') }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  nitro: {
    preset: 'static',
  },

  modules: ['@nuxtjs/seo', '@nuxt/icon', '@formkit/auto-animate/nuxt', '@vesp/nuxt-fontawesome', '@nuxtjs/color-mode', '@nuxtjs/i18n'],

  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar'],
      regular: ['user']
    }
  },

  colorMode: {
    classSuffix: ''
  },

  i18n: {
    locales: [
      { code: 'th', iso: 'th-TH', name: 'Thai', file: 'th.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'th',
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',

    },
    compilation: {
      strictMessage: false,
    }
  },

  // Tailwind CSS v4 via Vite plugin
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },

  // Global CSS
  css: ['~~/assets/css/main.css'],

  // SEO Configuration
  site: {
    url: 'https://example.com',
    name: 'PreJob - ระบบนัดหมายและรีวิวพนักงาน',
    description: 'ระบบบันทึกข้อมูลคนสมัครงาน นัดสัมภาษณ์ และรีวิวพนักงานแบบครบวงจร พร้อมแจ้งเตือนผ่าน LINE',
    defaultLocale: 'th',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'PreJob - ระบบนัดหมายและรีวิวพนักงาน',
      meta: [
        { name: 'description', content: 'ระบบบันทึกข้อมูลคนสมัครงาน นัดสัมภาษณ์ และรีวิวพนักงานแบบครบวงจร' },
        { name: 'theme-color', content: '#0f172a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'th_TH' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },
})