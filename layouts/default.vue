<template>
    <el-container>
        <el-header class="header-container" height="auto" :class="{ 'header--hidden': !isHeaderVisible }">
            <!-- Main Header -->
            <div class="main-header">
                <div class="main-header-content">
                    <el-row align="middle" :gutter="20">
                        <el-col :span="6">
                            <NuxtLink to="/" class="logo-link">
                                <div class="logo">
                                    <img src="/logo.svg" alt="Logo" class="logo-img" />
                                </div>
                            </NuxtLink>
                        </el-col>
                        <el-col :span="11">
                            <el-input :placeholder="t('header.search_placeholder')" class="search-bar">
                                <template #append>
                                    <el-button :icon="Search" />
                                </template>
                            </el-input>
                        </el-col>
                        <el-col :span="7">
                            <span>{{ t('header.call_us') }}</span>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <!-- Navigation Bar -->
            <div class="nav-bar">
                <div class="nav-bar-content">
                    <nav class="custom-main-menu">
                        <NuxtLink to="/" class="custom-menu-item">{{ t('navigation.home') }}</NuxtLink>
                        <!-- <NuxtLink to="/products" class="custom-menu-item">{{ t('navigation.products') }}</NuxtLink> -->
                        <NuxtLink to="/about" class="custom-menu-item">{{ t('navigation.about') }}</NuxtLink>
                        <NuxtLink to="/contact" class="custom-menu-item">{{ t('navigation.contact') }}</NuxtLink>
                    </nav>
                    <div class="nav-bar-right">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </el-header>

        <!-- Main Content -->
        <el-main class="main-content">
            <slot />
        </el-main>

        <!-- Footer -->
        <el-footer class="footer">
            <div class="footer-content">
                <div class="footer-section about">
                    <h4>{{ t('footer.about_us') }}</h4>
                    <p>{{ t('footer.about_us_text') }}</p>
                </div>
                <div class="footer-section links">
                    <h4>{{ t('footer.product_series') }}</h4>
                    <ul>
                        <li>
                            <NuxtLink to="/products">{{ t('home.sealant_title') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/products">{{ t('home.ab_glue_title') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/products">{{ t('home.glue_502_title') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/products">{{ t('home.tape_title') }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h4>{{ t('footer.contact_us') }}</h4>
                    <p>{{ t('footer.contact_email') }}</p>
                    <p>{{ t('footer.contact_phone') }}</p>
                    <p>{{ t('footer.contact_address') }}</p>
                </div>
                <div class="footer-section social">
                    <h4>{{ t('footer.follow_us') }}</h4>
                    <div class="social-icons">
                        <a href="#" target="_blank"
                            ><el-icon><Promotion /></el-icon
                        ></a>
                        <a href="#" target="_blank"
                            ><el-icon><ChatDotSquare /></el-icon
                        ></a>
                        <a href="#" target="_blank"
                            ><el-icon><Phone /></el-icon
                        ></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>{{ t('footer.copyright') }}</p>
            </div>
        </el-footer>

        <!-- Floating Contact Widget -->
        <div class="floating-contact">
            <div class="contact-icon">
                <el-icon><ChatDotRound /></el-icon>
            </div>
            <div class="qr-code-popup">
                <img src="/public/images/whatsapp.jpg" alt="WhatsApp QR Code" />
                <p>{{ t('floating_contact') }}</p>
            </div>
        </div>
    </el-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChatDotRound, Promotion, ChatDotSquare, Phone, Search } from '@element-plus/icons-vue';
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';

const { t } = useI18n({ useScope: 'global' });

const isHeaderVisible = ref(true);
const lastScrollTop = ref(0);

const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (Math.abs(currentScrollTop - lastScrollTop.value) < 10) {
        return;
    }
    if (currentScrollTop > lastScrollTop.value && currentScrollTop > 150) {
        isHeaderVisible.value = false;
    } else {
        isHeaderVisible.value = true;
    }
    lastScrollTop.value = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f4f5;
}

.header-container {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

/* Approx height of  main-header (85px)  */
.header-container.header--hidden {
    transform: translateY(-85px);
}

/* Top Bar */
.top-bar {
    background-color: #333;
    color: #fff;
    font-size: 13px;
    padding: 8px 0;
}
.top-bar-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.top-bar-right a {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s;
}
.top-bar-right a:hover {
    color: #409eff;
}

/* Main Header */
.main-header {
    background-color: #fff;
    padding: 20px 0;
}
.main-header-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}
.logo-link {
    text-decoration: none;
    color: inherit;
}
.logo {
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-weight: bold;
}
.logo-img {
    height: 45px;
    margin-right: 10px;
}
.search-bar .el-input__inner {
    height: 40px;
}
.account-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
}
.account-links a {
    color: #606266;
    text-decoration: none;
    margin-left: 20px;
    display: flex;
    align-items: center;
    transition: color 0.3s;
}
.account-links a:hover {
    color: #409eff;
}
.account-links .el-icon {
    margin-right: 5px;
    font-size: 1.2em;
}
.cart-link {
    font-weight: bold;
}

/* Navigation Bar */
.nav-bar {
    background-color: #006d79;
    height: 50px;
}
.nav-bar-content {
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.custom-main-menu {
    display: flex;
    height: 100%;
    align-items: center;
}
.custom-menu-item {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 25px;
    color: #ecf0f1;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
}
.custom-menu-item:hover {
    background-color: #34495e;
    color: #fff;
}
.custom-menu-item.router-link-exact-active {
    color: #fff;
    background-color: #1abc9c;
}

/* Main Content */
.main-content {
    padding: 0;
}

/* Footer */
.footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 40px 20px;
    height: auto;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.footer-section h4 {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
    border-bottom: 1px solid #34495e;
    padding-bottom: 10px;
}

.footer-section p,
.footer-section li {
    font-size: 14px;
    line-height: 1.8;
    color: #bdc3c7;
}

.footer-section.about p {
    padding-right: 20px;
}

.footer-section.links ul {
    list-style: none;
    padding: 0;
}

.footer-section.links a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section.links a:hover {
    color: #3498db;
}

.social-icons a {
    color: #bdc3c7;
    font-size: 24px;
    margin-right: 15px;
    text-decoration: none;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #3498db;
}

.footer-bottom {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #34495e;
    font-size: 14px;
    color: #95a5a6;
}

/* Floating Contact Widget */
.floating-contact {
    position: fixed;
    right: 40px;
    bottom: 100px;
    z-index: 1001;
}

.floating-contact .contact-icon {
    background-color: #25d366; /* WhatsApp Green */
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    transition: border-radius 0.3s ease;
}

.floating-contact:hover .contact-icon {
    border-radius: 20px;
}

.floating-contact .qr-code-popup {
    position: absolute;
    bottom: 0;
    right: 75px; /* Position to the left of the button */
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: scale(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    visibility: hidden;
}

.floating-contact:hover .qr-code-popup {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
}

.qr-code-popup img {
    width: 180px;
    height: 180px;
    display: block;
    transition: transform 0.3s ease;
}

.qr-code-popup img:hover {
    transform: scale(1.5); /* Enlarge QR code on hover */
}

.qr-code-popup p {
    text-align: center;
    margin: 10px 0 0;
    font-size: 14px;
    color: #333;
}
</style>
