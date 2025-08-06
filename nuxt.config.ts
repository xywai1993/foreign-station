export default defineNuxtConfig({
    pages: true,
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@element-plus/nuxt'],
    elementPlus: {
        importStyle: 'css',
        themes: ['dark'],
    },
    css: ['element-plus/dist/index.css'],

    // for github pages
    app: {
        baseURL: '/foreign-station/',
        buildAssetsDir: 'assets',
    },
    nitro: {
        static: {
            nojekyll: true,
        },
    },
});
