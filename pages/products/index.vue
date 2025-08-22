
<template>
  <div class="products-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>{{ t('products.title') }}</h1>
      <p>{{ t('products.subtitle') }}</p>
    </div>

    <div class="page-content">
      <!-- Filters -->
      <div class="filters">
        <el-radio-group v-model="activeCategory" size="large">
          <el-radio-button :label="t('products.all_categories')" />
          <el-radio-button v-for="category in categories" :key="category" :label="category" />
        </el-radio-group>
      </div>

      <!-- Product List -->
      <el-row :gutter="20">
        <el-col :span="6" v-for="product in paginatedProducts" :key="product._id">
          <el-card class="product-card">
            <img :src="product.img" class="product-image"/>
            <div class="product-info">
              <h4>{{ product.name }}</h4>
              <p class="product-desc">{{ product.subTitle }}</p>
              <el-button type="primary" plain @click="$router.push(`/products/${product._id}`)">{{ t('products.view_details') }}</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- Pagination -->
      <div class="pagination-container">
        <el-pagination
          v-if="filteredProducts.length > pageSize"
          background
          layout="prev, pager, next"
          :total="filteredProducts.length"
          :page-size="pageSize"
          v-model:current-page="currentPage">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useProducts } from '@/composables/useProducts';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
const { products: allProducts } = useProducts();

const activeCategory = ref(t('products.all_categories'));
const currentPage = ref(1);
const pageSize = ref(12);

const categories = computed(() => {
    if (!allProducts.value) return [];
    const categorySet = new Set(allProducts.value.map(p => p.category.name));
    return Array.from(categorySet);
});

const filteredProducts = computed(() => {
    if (!allProducts.value) return [];
    if (activeCategory.value === t('products.all_categories')) {
        return allProducts.value;
    }
    return allProducts.value.filter(p => p.category.name === activeCategory.value);
});

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredProducts.value.slice(start, end);
});

// Reset to first page when category changes
watch(activeCategory, () => {
    currentPage.value = 1;
});

onMounted(() => {
    if (route.query.category && typeof route.query.category === 'string') {
        // Ensure the category from query exists in our list of categories
        if (categories.value.includes(route.query.category)) {
            activeCategory.value = route.query.category;
        }
    }
});
</script>

<style scoped>
.products-page {
  background-color: #f7f8fa;
}

.page-header {
  padding: 60px 20px;
  text-align: center;
  background-color: white;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.filters {
  margin-bottom: 40px;
  text-align: center;
}

.product-card {
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-info h4 {
    flex-grow: 1;
}

.product-desc {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
  height: 4.5em; /* Limit to 3 lines */
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
