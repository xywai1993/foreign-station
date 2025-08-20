import fs from 'fs';
let productRoutes: string[] = [];
try {
    const products = JSON.parse(fs.readFileSync('public/_data/products.json', 'utf8'));
    productRoutes = products.map((p: any) => `/products/${p.id}`);
} catch (e) {
    // 忽略错误
}

export default defineNuxtConfig({
    pages: true,
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@element-plus/nuxt', '@nuxtjs/i18n'],
    elementPlus: {
        importStyle: 'css',
        themes: ['dark'],
    },
    css: ['element-plus/dist/index.css'],

    i18n: {
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'zh', name: '中文', file: 'zh.json' },
        ],
        defaultLocale: 'zh',
    },
    nitro: {
        prerender: {
            routes: ['/', '/about', '/contact', '/products', ...productRoutes],
        },
    },
});
