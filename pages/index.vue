<template>
    <div class="home">
        <!-- Hero Section -->
        <div class="hero-section">
            <el-carousel arrow="never">
                <el-carousel-item v-for="i in 4" :key="i">
                    <img :src="`/images/banner/banner--${i}.jpg`" class="hero-image" :alt="`Banner ${i}`" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- Enhanced Advantages Section -->
        <div class="advantages-section section-padding">
            <h2 class="section-title">{{ t('home.advantages_title') }}</h2>
            <el-row :gutter="0" class="advantages-row">
                <el-col :span="8" class="advantage-item-col">
                    <div
                        class="advantage-card"
                        style="background-image: url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop')"
                    >
                        <div class="advantage-content">
                            <el-icon><Box /></el-icon>
                            <h3>{{ t('home.quality_title') }}</h3>
                            <p>{{ t('home.quality_text') }}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="advantage-item-col">
                    <div
                        class="advantage-card"
                        style="background-image: url('https://images.unsplash.com/photo-1600880292210-85938b023555?q=80&w=2070&auto=format&fit=crop')"
                    >
                        <div class="advantage-content">
                            <el-icon><Opportunity /></el-icon>
                            <h3>{{ t('home.innovation_title') }}</h3>
                            <p>{{ t('home.innovation_text') }}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="advantage-item-col">
                    <div
                        class="advantage-card"
                        style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop')"
                    >
                        <div class="advantage-content">
                            <el-icon><Service /></el-icon>
                            <h3>{{ t('home.service_title') }}</h3>
                            <p>{{ t('home.service_text') }}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- Anchor Navigation -->
        <div class="anchor-nav-section">
            <el-row :gutter="20">
                <el-col :span="6">
                    <a href="#sealant-products" class="anchor-card" style="background-image: url('/images/nav/1.jpg')"></a>
                </el-col>
                <el-col :span="6">
                    <a href="#ab-glue-products" class="anchor-card" style="background-image: url('/images/nav/2.jpg')"></a>
                </el-col>
                <el-col :span="6">
                    <a href="#502-glue-products" class="anchor-card" style="background-image: url('/images/nav/3.jpg')"></a>
                </el-col>
                <el-col :span="6">
                    <a href="#tape-products" class="anchor-card" style="background-image: url('/images/nav/4.jpg')"></a>
                </el-col>
            </el-row>
        </div>

        <!-- Product Sections -->
        <div id="sealant-products" class="products-section section-padding">
            <NuxtLink to="/" class="category-sidebar" style="background-image: url('/images/bg/a.jpg')"></NuxtLink>
            <div class="product-list-wrapper">
                <ProductRow :products="sealantProducts" />
            </div>
        </div>
        <div id="ab-glue-products" class="products-section section-padding bg-light">
            <NuxtLink to="/" class="category-sidebar" style="background-image: url('/images/bg/c.jpg')"></NuxtLink>
            <div class="product-list-wrapper">
                <ProductRow :products="abGlueProducts" />
            </div>
        </div>
        <div id="502-glue-products" class="products-section section-padding">
            <NuxtLink to="/" class="category-sidebar" style="background-image: url('/images/bg/d.jpg')"></NuxtLink>
            <div class="product-list-wrapper">
                <ProductRow :products="glue502Products" />
            </div>
        </div>
        <div id="tape-products" class="products-section section-padding bg-light">
            <NuxtLink to="/" class="category-sidebar" style="background-image: url('/images/bg/b.jpg')"></NuxtLink>
            <div class="product-list-wrapper">
                <ProductRow :products="tapeProducts" />
            </div>
        </div>

        <!-- Company Strength Section -->
        <div class="strength-section section-padding">
            <h2 class="section-title">{{ t('home.strength_title') }}</h2>
            <el-row :gutter="40">
                <el-col :span="8" class="strength-item">
                    <div class="strength-number">1,200+</div>
                    <div class="strength-label">{{ t('home.strength_clients') }}</div>
                </el-col>
                <el-col :span="8" class="strength-item">
                    <div class="strength-number">5,000T+</div>
                    <div class="strength-label">{{ t('home.strength_output') }}</div>
                </el-col>
                <el-col :span="8" class="strength-item">
                    <div class="strength-number">300+</div>
                    <div class="strength-label">{{ t('home.strength_products') }}</div>
                </el-col>
            </el-row>
        </div>

        <!-- Why Choose Us Section -->
        <div class="choose-us-section section-padding">
            <el-row :gutter="40" align="middle">
                <el-col :span="12">
                    <img
                        src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=1974&auto=format&fit=crop"
                        class="choose-us-image"
                        alt="Factory"
                    />
                </el-col>
                <el-col :span="12" class="choose-us-content">
                    <h2 class="section-title">{{ t('home.why_choose_us_title') }}</h2>
                    <p>
                        {{ t('home.why_choose_us_text') }}
                    </p>
                    <el-button type="primary" plain>{{ t('home.contact_us_button') }}</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Box, Opportunity, Service } from '@element-plus/icons-vue';
import { useProducts } from '@/composables/useProducts';

const { t } = useI18n({ useScope: 'global' });
// const { data: products } = await useAsyncData('products', () => $fetch('/_data/products.json'));
const { products } = useProducts();
const sealantProducts = computed(() => (products.value ?? []).filter((p) => p.category.name === 'RTV Silicone Gasket Maker'));
const abGlueProducts = computed(() => (products.value ?? []).filter((p) => p.category.name === 'AB Adhesives'));
const glue502Products = computed(() => (products.value ?? []).filter((p) => p.category.name === 'Super Glue'));
const tapeProducts = computed(() => (products.value ?? []).filter((p) => p.category.name === 'PVC Wire Harness Insulation Tape'));
</script>

<style>
html {
    scroll-behavior: smooth;
}
.bg-light {
    background-color: #f7f8fa;
}
</style>

<style scoped>
.section-padding {
    padding: 60px 20px;
    max-width: 1400px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 40px;
    color: #303133;
}

/* Hero Section */
.hero-section {
    position: relative;
    width: 100%;
    height: 0;
    /* Aspect Ratio: (height / width) * 100%. Using 600/1920 = 31.25% */
    padding-bottom: 31.25%;
    background-color: #eee; /* Fallback color */
}

.hero-section :deep(.el-carousel),
.hero-section :deep(.el-carousel__container) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the area, will crop if aspect ratio mismatches */
    display: block;
}

/* Advantages Section */
.advantages-section {
    background-color: #fff;
}
.advantages-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
}
.advantage-item-col {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.advantage-card {
    height: 350px;
    position: relative;
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    align-items: flex-end;
    transition: transform 0.4s ease;
}
.advantage-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%);
    transition: background 0.4s ease;
}
.advantage-card:hover {
    transform: scale(1.05);
    z-index: 10;
}
.advantage-card:hover::before {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 70%);
}
.advantage-content {
    position: relative;
    z-index: 2;
    padding: 30px;
    transition: all 0.4s ease;
}
.advantage-card:hover .advantage-content {
    transform: translateY(-10px);
}
.advantage-content .el-icon {
    font-size: 48px;
    margin-bottom: 15px;
}
.advantage-content h3 {
    font-size: 1.8em;
    margin-bottom: 10px;
    font-weight: bold;
}
.advantage-content p {
    font-size: 1em;
    line-height: 1.6;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
}
.advantage-card:hover p {
    opacity: 1;
    transform: translateY(0);
}

/* New Anchor Navigation */
.anchor-nav-section {
    /* The .section-padding class handles max-width and centering */
    margin: 20px auto 40px;
    max-width: 1440px;
}
.anchor-card {
    display: block;
    height: 160px;
    border-radius: 8px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    text-decoration: none;
    transition: all 0.3s ease;
    overflow: hidden;
}

.anchor-card:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Products Section */
.products-section {
    background-color: #fff;
    display: flex;
    gap: 40px;
    align-items: stretch; /* Make columns same height */
}
.products-section.bg-light {
    background-color: #f7f8fa;
}

.product-list-wrapper {
    flex: 1;
    min-width: 0; /* Fix for potential overflow issues in flex items */
}

.category-sidebar {
    flex: 0 0 25%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: left top;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.category-sidebar:hover {
    transform: scale(1.03);
}

/* Strength Section */
.strength-section {
    background-color: #f7f8fa;
}
.strength-item {
    text-align: center;
}
.strength-number {
    font-size: 3.5em;
    font-weight: bold;
    color: #409eff;
}
.strength-label {
    font-size: 1.2em;
    color: #606266;
    margin-top: 10px;
}

/* Choose Us Section */
.choose-us-section {
    background-color: #2c3e50;
    color: #ecf0f1;
}
.choose-us-section .section-title {
    color: #fff;
    text-align: left;
}
.choose-us-content p {
    font-size: 1.1em;
    line-height: 1.8;
    margin-bottom: 30px;
}
.choose-us-image {
    width: 100%;
    border-radius: 8px;
}
</style>
