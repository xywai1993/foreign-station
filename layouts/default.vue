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
    </el-container>
</template>

<script setup lang="ts"></script>

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
</style>
