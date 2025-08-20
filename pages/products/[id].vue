<template>
    <div class="product-detail-page" v-if="product">
        <div class="container">
            <el-row :gutter="40">
                <el-col :span="12">
                    <img :src="product.img" :alt="product.name" class="product-main-image" />
                </el-col>
                <el-col :span="12">
                    <div class="product-info">
                        <h1 class="product-title">{{ product.name }}</h1>
                        <p class="product-description">{{ product.description }}</p>

                        <div v-html="product.desc"></div>
                        <!-- <div class="product-features">
                            <h3>产品特性</h3>
                            <ul>
                                <li v-for="feature in product.details.features" :key="feature">{{ feature }}</li>
                            </ul>
                        </div>

                        <div class="product-applications">
                            <h3>主要应用</h3>
                            <p>{{ product.details.applications }}</p>
                        </div>

                        <div class="product-specs">
                            <h3>技术规格</h3>
                            <p>{{ product.details.specs }}</p>
                        </div> -->

                        <el-button type="primary" size="large" @click="$router.push('/contact')">获取报价</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    <div v-else class="product-not-found">
        <el-empty description="产品未找到" />
        <el-button @click="$router.push('/')">返回首页</el-button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProducts } from '@/composables/useProducts';
const route = useRoute();
// const { data: products, error } = await useAsyncData('products', () => $fetch('/_data/products.json'));
const { products } = useProducts();
// 判空和类型兼容，避免 SSG/SSR 500 错误
const product = computed(() => {
    const list = products.value ?? [];
    // 兼容 id 或 _id 字段
    return list.find((p: any) => p._id === route.params.id || p.id === route.params.id);
});
</script>

<style scoped>
.product-detail-page {
    padding: 60px 0;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.product-main-image {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.product-info {
    text-align: left;
}
.product-title {
    font-size: 2.5em;
    margin-bottom: 20px;
}
.product-description {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 30px;
}
.product-features,
.product-applications,
.product-specs {
    margin-bottom: 30px;
}
.product-features h3,
.product-applications h3,
.product-specs h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    border-left: 4px solid #409eff;
    padding-left: 10px;
}
.product-features ul {
    list-style-type: disc;
    padding-left: 20px;
}
.product-not-found {
    text-align: center;
    padding: 100px 0;
}
</style>
