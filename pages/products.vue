<template>
  <div class="products-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>我们的产品</h1>
      <p>探索我们全面的工业胶粘剂产品线，找到最适合您应用的解决方案。</p>
    </div>

    <div class="page-content">
      <!-- Filters -->
      <div class="filters">
        <el-radio-group v-model="activeCategory" size="large">
          <el-radio-button label="全部" />
          <el-radio-button v-for="category in categories" :key="category" :label="category" />
        </el-radio-group>
      </div>

      <!-- Product List -->
      <el-row :gutter="20">
        <el-col :span="6" v-for="product in filteredProducts" :key="product.id">
          <el-card class="product-card">
            <img :src="product.image" class="product-image"/>
            <div class="product-info">
              <h4>{{ product.name }}</h4>
              <p class="product-model">型号: {{ product.model }}</p>
              <p class="product-desc">{{ product.description }}</p>
              <el-button type="primary" plain>查看详情</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- Pagination -->
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100" 
          :page-size="12">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('全部')
const categories = ref(['环氧树脂胶', '瞬干胶', 'UV固化胶', '硅酮密封胶'])

const allProducts = ref([
  { id: 1, name: '高强度环氧胶', model: 'EP-30', category: '环氧树脂胶', description: '适用于结构粘接，耐高温高湿。'
, image: 'https://images.unsplash.com/photo-1604145861548-9b8e3578b4d7?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: '金属专用瞬干胶', model: 'CA-100', category: '瞬干胶', description: '专为金属设计，5秒快速固化。'
, image: 'https://images.unsplash.com/photo-1599493343428-ca54a4770979?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, name: '光学级UV胶', model: 'UV-9001', category: 'UV固化胶', description: '高透明度，低收缩率，用于精密光学仪器。'
, image: 'https://images.unsplash.com/photo-1581093450029-0b163e426a3a?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, name: '耐候硅酮密封胶', model: 'SL-500', category: '硅酮密封胶', description: '优异的抗紫外线和耐候性能。'
, image: 'https://images.unsplash.com/photo-1619043514489-53353924f740?q=80&w=1974&auto=format&fit=crop' },
  { id: 5, name: '柔性环氧树脂胶', model: 'EP-FLEX', category: '环氧树脂胶', description: '具有优异的抗冲击和剥离强度。'
, image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, name: '塑料专用瞬干胶', model: 'CA-P1', category: '瞬干胶', description: '适用于PP、PE等难粘塑料。'
, image: 'https://images.unsplash.com/photo-1617192259921-2458bcec39a6?q=80&w=2070&auto=format&fit=crop' },
  { id: 7, name: '医用级UV胶', model: 'UV-MED', category: 'UV固化胶', description: '无毒、无刺激，符合医疗认证。'
, image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, name: '防火硅酮密封胶', model: 'SL-FR', category: '硅酮密封胶', description: '具有优异的防火性能，保障安全。'
, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop' },
])

const filteredProducts = computed(() => {
  if (activeCategory.value === '全部') {
    return allProducts.value
  }
  return allProducts.value.filter(p => p.category === activeCategory.value)
})

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
}

.product-model {
  font-size: 0.9em;
  color: #999;
  margin: 5px 0;
}

.product-desc {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>