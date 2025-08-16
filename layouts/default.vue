<template>
    <el-container>
        <el-header class="header-container" height="auto" :class="{ 'header--hidden': !isHeaderVisible }">
            <!-- Top Bar -->
            <div class="top-bar">
                <div class="top-bar-content">
                    <div class="top-bar-left">
                        <span>Call Us: +86 123 4567 8901</span>
                    </div>
                    <div class="top-bar-right">
                        <a href="#">Financing</a>
                        <a href="#">Weekly Deals</a>
                        <a href="#">Brands</a>
                    </div>
                </div>
            </div>

            <!-- Main Header -->
            <div class="main-header">
                <div class="main-header-content">
                    <el-row align="middle" :gutter="20">
                        <el-col :span="6">
                            <NuxtLink to="/" class="logo-link">
                                <div class="logo">
                                    <img src="/logo.svg" alt="Logo" class="logo-img" />
                                    <span>工业胶水</span>
                                </div>
                            </NuxtLink>
                        </el-col>
                        <el-col :span="11">
                            <el-input placeholder="Search for products..." class="search-bar">
                                <template #append>
                                    <el-button :icon="Search" />
                                </template>
                            </el-input>
                        </el-col>
                        <el-col :span="7">
                            <div class="account-links">
                                <a href="#"><el-icon><User /></el-icon> Sign In</a>
                                <a href="#">Create an Account</a>
                                <a href="#" class="cart-link"><el-icon><ShoppingCart /></el-icon> Cart</a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <!-- Navigation Bar -->
            <div class="nav-bar">
                <div class="nav-bar-content">
                    <nav class="custom-main-menu">
                        <NuxtLink to="/" class="custom-menu-item">首页</NuxtLink>
                        <NuxtLink to="/products" class="custom-menu-item">产品</NuxtLink>
                        <NuxtLink to="/about" class="custom-menu-item">关于我们</NuxtLink>
                        <NuxtLink to="/contact" class="custom-menu-item">联系我们</NuxtLink>
                    </nav>
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
                    <h4>关于我们</h4>
                    <p>我们是领先的工业胶水解决方案提供商，致力于为全球客户提供高质量、高性能的粘合剂产品。</p>
                </div>
                <div class="footer-section links">
                    <h4>产品系列</h4>
                    <ul>
                        <li><NuxtLink to="/products">密封胶</NuxtLink></li>
                        <li><NuxtLink to="/products">AB胶</NuxtLink></li>
                        <li><NuxtLink to="/products">502胶</NuxtLink></li>
                        <li><NuxtLink to="/products">电工胶布</NuxtLink></li>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h4>联系方式</h4>
                    <p>Email: contact@industrial-glue.com</p>
                    <p>Phone: +86 123 4567 8901</p>
                    <p>地址: 中国上海市工业园区123号</p>
                </div>
                <div class="footer-section social">
                    <h4>关注我们</h4>
                    <div class="social-icons">
                        <a href="#" target="_blank"><el-icon><Promotion /></el-icon></a>
                        <a href="#" target="_blank"><el-icon><ChatDotSquare /></el-icon></a>
                        <a href="#" target="_blank"><el-icon><Phone /></el-icon></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2025 工业胶水公司. 版权所有.</p>
            </div>
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
import { ref, onMounted, onUnmounted } from 'vue';
import { ChatDotRound, Promotion, ChatDotSquare, Phone, Search, User, ShoppingCart } from '@element-plus/icons-vue';

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

/* Approx height of top-bar (36px) + main-header (85px) = 121px */
.header-container.header--hidden {
    transform: translateY(-121px);
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
    background-color: #2c3e50;
    height: 50px;
}
.nav-bar-content {
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
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

.footer-section p, .footer-section li {
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