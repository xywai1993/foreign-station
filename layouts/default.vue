<template>
    <el-container>
        <el-header class="header-fixed">
            <div class="header-content">
                <NuxtLink to="/" class="logo-link">
                    <div class="logo">
                        <img src="/logo.svg" alt="Logo" class="logo-img" />
                        <span>工业胶水</span>
                    </div>
                </NuxtLink>
                <el-menu mode="horizontal" :router="true" :default-active="$route.path" class="main-menu">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/products">产品</el-menu-item>
                    <el-menu-item index="/about">关于我们</el-menu-item>
                    <el-menu-item index="/contact">联系我们</el-menu-item>
                </el-menu>
            </div>
        </el-header>
        <el-main class="main-content">
            <slot />
        </el-main>
        <el-footer class="footer">
            <p>© 2025 工业胶水公司. 版权所有.</p>
        </el-footer>

        <!-- Floating Contact Widget -->
        <div class="floating-contact">
            <div class="contact-icon">
                <el-icon><ChatDotRound /></el-icon>
            </div>
            <div class="qr-code-popup">
                <img src="https://placehold.co/200x200/png?text=WhatsApp+QR" alt="WhatsApp QR Code" />
                <p>扫码联系 WhatsApp</p>
            </div>
        </div>
    </el-container>
</template>

<script setup lang="ts">
import { ChatDotRound } from '@element-plus/icons-vue';
</script>

<style>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.logo-link {
    text-decoration: none;
    color: inherit;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
}

.logo-img {
    height: 40px;
    margin-right: 10px;
}

.main-menu {
    border-bottom: none;
}

.main-content {
    margin-top: 60px; /* height of header */
    padding: 0;
}

.footer {
    background-color: #f2f2f2;
    text-align: center;
    padding: 20px 0;
}

/* Floating Contact Widget */
.floating-contact {
    position: fixed;
    right: 40px;
    bottom: 100px;
    z-index: 1001;
}

.floating-contact .contact-icon {
    background-color: #25D366; /* WhatsApp Green */
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
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
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
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
