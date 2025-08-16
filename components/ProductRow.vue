<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="product in products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`" class="product-link">
        <el-card class="product-card">
          <img :src="product.image" class="product-image" />
          <div style="padding: 14px">
            <h4>{{ product.name }}</h4>
            <p class="product-desc">{{ product.description }}</p>
          </div>
        </el-card>
      </NuxtLink>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import type { Product } from '@/composables/useProducts';

defineProps<{ products: Product[] }>();
</script>

<style scoped>
.product-link {
  text-decoration: none;
}

.product-card {
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-desc {
  font-size: 0.9em;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
