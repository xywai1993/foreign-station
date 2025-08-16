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
            <h2 class="section-title">我们的优势</h2>
            <el-row :gutter="0" class="advantages-row">
                <el-col :span="8" class="advantage-item-col">
                    <div class="advantage-card" style="background-image: url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop')">
                        <div class="advantage-content">
                            <el-icon><Box /></el-icon>
                            <h3>质量可靠</h3>
                            <p>采用优质原料，通过国际标准认证，确保每一滴胶水的卓越性能。</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="advantage-item-col">
                     <div class="advantage-card" style="background-image: url('https://images.unsplash.com/photo-1600880292210-85938b023555?q=80&w=2070&auto=format&fit=crop')">
                        <div class="advantage-content">
                            <el-icon><Opportunity /></el-icon>
                            <h3>技术创新</h3>
                            <p>拥有专业的研发团队，不断探索新配方，满足多样化的应用需求。</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="advantage-item-col">
                     <div class="advantage-card" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop')">
                        <div class="advantage-content">
                            <el-icon><Service /></el-icon>
                            <h3>专业服务</h3>
                            <p>提供从选型到售后的全方位技术支持，为您解决粘接难题。</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- Anchor Navigation -->
        <div class="anchor-nav-section section-padding">
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
            <el-row :gutter="40" align="middle">
                <el-col :span="6">
                    <div class="category-sidebar">
                        <h2 class="category-title">密封胶</h2>
                        <p class="category-description">提供卓越的密封、防水和防尘性能，适用于建筑、汽车和电子等多个领域。</p>
                        <el-button type="primary" plain @click="$router.push('/products')">查看全部</el-button>
                    </div>
                </el-col>
                <el-col :span="18">
                    <ProductRow :products="sealantProducts" />
                </el-col>
            </el-row>
        </div>
        <div id="ab-glue-products" class="products-section section-padding bg-light">
            <el-row :gutter="40" align="middle">
                <el-col :span="6">
                    <div class="category-sidebar">
                        <h2 class="category-title">AB胶</h2>
                        <p class="category-description">高强度、快速固化的结构胶粘剂，适用于金属、塑料、陶瓷等多种材料的粘接。</p>
                        <el-button type="primary" plain @click="$router.push('/products')">查看全部</el-button>
                    </div>
                </el-col>
                <el-col :span="18">
                    <ProductRow :products="abGlueProducts" />
                </el-col>
            </el-row>
        </div>
        <div id="502-glue-products" class="products-section section-padding">
            <el-row :gutter="40" align="middle">
                <el-col :span="6">
                    <div class="category-sidebar">
                        <h2 class="category-title">502胶</h2>
                        <p class="category-description">瞬间强力粘接，广泛用于家庭维修、手工艺制作和工业生产中的快速固定。</p>
                        <el-button type="primary" plain @click="$router.push('/products')">查看全部</el-button>
                    </div>
                </el-col>
                <el-col :span="18">
                    <ProductRow :products="glue502Products" />
                </el-col>
            </el-row>
        </div>
        <div id="tape-products" class="products-section section-padding bg-light">
            <el-row :gutter="40" align="middle">
                <el-col :span="6">
                    <div class="category-sidebar">
                        <h2 class="category-title">电工胶布</h2>
                        <p class="category-description">优良的绝缘性能和阻燃性，为电气作业提供可靠的安全保障。</p>
                        <el-button type="primary" plain @click="$router.push('/products')">查看全部</el-button>
                    </div>
                </el-col>
                <el-col :span="18">
                    <ProductRow :products="tapeProducts" />
                </el-col>
            </el-row>
        </div>

        <!-- Company Strength Section -->
        <div class="strength-section section-padding">
             <h2 class="section-title">实力见证</h2>
            <el-row :gutter="40">
                <el-col :span="8" class="strength-item">
                    <div class="strength-number">1,200+</div>
                    <div class="strength-label">服务客户</div>
                </el-col>
                <el-col :span="8" class="strength-item">
                    <div class="strength-number">5,000T+</div>
                    <div class="strength-label">年产量</div>
                </el-col>
                <el-col :span="8" class="strength-item">
                    <div class="strength-number">300+</div>
                    <div class="strength-label">产品种类</div>
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
                    <h2 class="section-title">为什么选择我们？</h2>
                    <p>
                        我们不仅仅是胶水供应商，更是您可靠的合作伙伴。我们深入了解您的行业需求，提供量身定制的解决方案，帮助您提高生产效率、降低成本，并在激烈的市场竞争中脱颖而出。
                    </p>
                    <el-button type="primary" plain>联系我们</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Box, Opportunity, Service } from '@element-plus/icons-vue';
import { useProducts } from '@/composables/useProducts';

const { products } = useProducts();

const sealantProducts = computed(() => products.value.filter(p => p.category === '密封胶').slice(0, 4));
const abGlueProducts = computed(() => products.value.filter(p => p.category === 'AB胶').slice(0, 4));
const glue502Products = computed(() => products.value.filter(p => p.category === '502胶').slice(0, 4));
const tapeProducts = computed(() => products.value.filter(p => p.category === '电工胶布').slice(0, 4));
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
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
    transition: background 0.4s ease;
}
.advantage-card:hover {
    transform: scale(1.05);
    z-index: 10;
}
.advantage-card:hover::before {
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 70%);
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
}
.anchor-card {
    display: block;
    height: 200px;
    border-radius: 8px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-decoration: none;
    transition: all 0.3s ease;
    overflow: hidden;
}

.anchor-card:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Products Section */
.products-section {
    background-color: #fff;
}
.products-section.bg-light {
    background-color: #f7f8fa;
}

.category-sidebar {
    padding-right: 30px; /* Add some space between sidebar and products */
}

.category-title {
    font-size: 2.2em;
    font-weight: bold;
    color: #303133;
    margin-bottom: 20px;
    text-align: left;
}

.category-description {
    font-size: 1.1em;
    color: #606266;
    line-height: 1.7;
    margin-bottom: 30px;
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
