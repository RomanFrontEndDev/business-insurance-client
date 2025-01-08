/**
 * Конфиг Nuxt3 - https://nuxt.com/docs/api/configuration/nuxt-config.
 */
export default defineNuxtConfig({
    app: {
        head: {
            charset:  'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
            title:    'Business Insurance',
            link:     [
                { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
                { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/manifest.webmanifest' },
            ],
            meta: [
                {
                    name:    'theme-color',
                    content: '#fefefe',
                },
            ],
        },
    },
    css: [
        '@/styles/common.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/styles/_variables.scss" as *;
                        @use "@/styles/_mixins.scss" as *;
                        @use "@/styles/_fonts.scss" as *;
                    `,
                },
            },
        },
    },
    runtimeConfig: {
        apiBaseURL: process.env.API_URL,
        public:     {
            mode: process.env.MODE,
        },
    },
    postcss: {
        plugins: {
            'postcss-preset-env': {},
        },
    },
    nitro: {
        preset: 'vercel-edge'
    },
    compatibilityDate: '2024-11-01',
    devtools:          { enabled: true }
});
