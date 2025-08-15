<template>
    <div class="home">
        <!-- Hero Section -->
        <div class="hero-section">
            <el-carousel height="500px" arrow="never">
                <el-carousel-item>
                    <img src="/images/banner/banner--1.jpg" class="hero-image" alt="Industrial Glue Application" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/images/banner/banner--2.jpg" class="hero-image" alt="Chemical Engineering" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/images/banner/banner--3.jpg" class="hero-image" alt="Chemical Engineering" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/images/banner/banner--4.jpg" class="hero-image" alt="Chemical Engineering" />
                </el-carousel-item>
            </el-carousel>
            <!-- <div class="hero-content">
                <h1>高性能工业胶粘剂解决方案</h1>
                <p>为您的制造挑战提供可靠、高效的粘接技术</p>
                <el-button type="primary" size="large">了解更多</el-button>
            </div> -->
        </div>

        <!-- Advantages Section -->
        <!-- <div class="advantages-section section-padding">
            <el-row :gutter="40">
                <el-col :span="8" class="advantage-item">
                    <el-icon><Box /></el-icon>
                    <h3>质量可靠</h3>
                    <p>采用优质原料，通过国际标准认证，确保每一滴胶水的卓越性能。</p>
                </el-col>
                <el-col :span="8" class="advantage-item">
                    <el-icon><Opportunity /></el-icon>
                    <h3>技术创新</h3>
                    <p>拥有专业的研发团队，不断探索新配方，满足多样化的应用需求。</p>
                </el-col>
                <el-col :span="8" class="advantage-item">
                    <el-icon><Service /></el-icon>
                    <h3>专业服务</h3>
                    <p>提供从选型到售后的全方位技术支持，为您解决粘接难题。</p>
                </el-col>
            </el-row>
        </div> -->

        <!-- Anchor Navigation -->
        <div class="anchor-nav section-padding">
            <el-row justify="center" :gutter="40">
                <el-col :span="5">
                    <a href="#sealant-products" class="anchor-link">
                        <img src="/images/mf/mf--1.jpg" class="anchor-icon" alt="密封胶" />
                        <span class="anchor-text">密封胶</span>
                    </a>
                </el-col>
                <el-col :span="5">
                    <a href="#ab-glue-products" class="anchor-link">
                        <img src="/images/AB/AB--1.jpg" class="anchor-icon" alt="AB胶" />
                        <span class="anchor-text">AB胶</span>
                    </a>
                </el-col>
                <el-col :span="5">
                    <a href="#502-glue-products" class="anchor-link">
                        <img src="/images/502/502--1.jpg" class="anchor-icon" alt="502胶" />
                        <span class="anchor-text">502胶</span>
                    </a>
                </el-col>
                <el-col :span="5">
                    <a href="#tape-products" class="anchor-link">
                        <img src="/images/jb/jb--01.jpg" class="anchor-icon" alt="电工胶布" />
                        <span class="anchor-text">电工胶布</span>
                    </a>
                </el-col>
            </el-row>
        </div>

        <!-- Sealant Products Section -->
        <div id="sealant-products" class="products-section section-padding">
            <h2 class="section-title">密封胶</h2>
            <el-row :gutter="20">
                <el-col :span="6" v-for="product in sealantProducts" :key="product.id">
                    <NuxtLink :to="`/products/${product.id}`" class="product-link">
                        <el-card class="product-card">
                            <img :src="resolveProductImage(product.image)" class="product-image" />
                            <div style="padding: 14px">
                                <h4>{{ product.name }}</h4>
                                <p class="product-desc">{{ product.description }}</p>
                            </div>
                        </el-card>
                    </NuxtLink>
                </el-col>
            </el-row>
        </div>

        <!-- AB Glue Products Section -->
        <div id="ab-glue-products" class="products-section section-padding">
            <h2 class="section-title">AB胶</h2>
            <el-row :gutter="20">
                <el-col :span="6" v-for="product in abGlueProducts" :key="product.id">
                    <NuxtLink :to="`/products/${product.id}`" class="product-link">
                        <el-card class="product-card">
                            <img :src="resolveProductImage(product.image)" class="product-image" />
                            <div style="padding: 14px">
                                <h4>{{ product.name }}</h4>
                                <p class="product-desc">{{ product.description }}</p>
                            </div>
                        </el-card>
                    </NuxtLink>
                </el-col>
            </el-row>
        </div>

        <!-- 502 Glue Products Section -->
        <div id="502-glue-products" class="products-section section-padding">
            <h2 class="section-title">502胶</h2>
            <el-row :gutter="20">
                <el-col :span="6" v-for="product in glue502Products" :key="product.id">
                    <NuxtLink :to="`/products/${product.id}`" class="product-link">
                        <el-card class="product-card">
                            <img :src="resolveProductImage(product.image)" class="product-image" />
                            <div style="padding: 14px">
                                <h4>{{ product.name }}</h4>
                                <p class="product-desc">{{ product.description }}</p>
                            </div>
                        </el-card>
                    </NuxtLink>
                </el-col>
            </el-row>
        </div>

        <!-- Electrical Tape Products Section -->
        <div id="tape-products" class="products-section section-padding">
            <h2 class="section-title">电工胶布</h2>
            <el-row :gutter="20">
                <el-col :span="6" v-for="product in tapeProducts" :key="product.id">
                    <NuxtLink :to="`/products/${product.id}`" class="product-link">
                        <el-card class="product-card">
                            <img :src="resolveProductImage(product.image)" class="product-image" />
                            <div style="padding: 14px">
                                <h4>{{ product.name }}</h4>
                                <p class="product-desc">{{ product.description }}</p>
                            </div>
                        </el-card>
                    </NuxtLink>
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
                <el-col :span="12">
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

const { baseURL } = useAppConfig();
const { products } = useProducts();

const sealantProducts = computed(() => products.value.filter((p) => p.category === '密封胶').slice(0, 4));
const abGlueProducts = computed(() => products.value.filter((p) => p.category === 'AB胶').slice(0, 4));
const glue502Products = computed(() => products.value.filter((p) => p.category === '502胶').slice(0, 4));
const tapeProducts = computed(() => products.value.filter((p) => p.category === '电工胶布').slice(0, 4));

const resolveProductImage = (imagePath: string) => {
    return process.dev ? `/${imagePath}` : `${baseURL}${imagePath}`;
};
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>

<style scoped>
.section-padding {
    padding: 60px 80px;
}

.section-title {
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 40px;
}

/* Hero Section */
.hero-section {
    position: relative;
    text-align: center;
    color: white;
}

.hero-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: brightness(0.6);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-content h1 {
    font-size: 3em;
    font-weight: bold;
}

.hero-content p {
    font-size: 1.2em;
    margin-top: 20px;
    margin-bottom: 30px;
}

/* Advantages Section */
.advantages-section {
    background-color: #f7f8fa;
}
.advantage-item .el-icon {
    font-size: 48px;
    margin-bottom: 20px;
    color: #409eff;
}
.advantage-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

/* Anchor Nav */
.anchor-nav {
    background-color: #f7f8fa; /* Changed background for contrast */
    padding-top: 40px;
    padding-bottom: 40px;
}
.anchor-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #303133;
    transition: all 0.3s;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.anchor-link:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    color: #409eff;
}
.anchor-icon {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 50%;
    border: 3px solid #eee;
}
.anchor-link:hover .anchor-icon {
    border-color: #409eff;
}
.anchor-text {
    font-size: 1.1em;
    font-weight: 500;
}

/* Products Section */
.product-link {
    text-decoration: none;
}

.product-card {
    transition: transform 0.3s, box-shadow 0.3s;
}
.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.product-desc {
    font-size: 0.9em;
    color: #666;
}

/* Choose Us Section */
.choose-us-image {
    width: 100%;
    border-radius: 8px;
}
</style>
