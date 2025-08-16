<template>
    <el-dropdown trigger="hover" @command="changeLanguage">
        <span class="el-dropdown-link">
            <el-icon class="el-icon--right" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.2" />
                    <path d="M2 12h20" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity="0.9" />
                    <path d="M12 2c2.5 3 2.5 9 0 13-2.5-4-2.5-10 0-13z" stroke="#fff" stroke-width="1" fill="none" opacity="0.9" />
                </svg>
            </el-icon>
            <span class="lang-label">{{ currentLabel }}</span>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="locale in availableLocales" :key="locale.code" :command="locale.code">
                    {{ locale.name }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const { locales, setLocale, locale } = useI18n({ useScope: 'global' });

const availableLocales = locales;

const currentLabel = computed(() => {
    // support both ref and raw array
    const list: any[] = Array.isArray(locales) ? locales : locales && (locales as any).value ? (locales as any).value : [];
    const cur = locale && (locale as any).value ? (locale as any).value : locale;
    const found = list.find((l: any) => l.code === cur);
    return found ? found.name : cur || 'Language';
});

const changeLanguage = (lang: string) => {
    // cast to any to satisfy TS if setLocale has narrow type
    setLocale(lang as any);
};
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 16px;
}
.lang-label {
    margin-left: 8px;
    color: #fff;
    font-size: 14px;
}
</style>
