<template>
  <div class="about-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>关于我们</h1>
      <p>我们不仅仅是胶水制造商，我们是您创新的合作伙伴。</p>
    </div>

    <div class="page-content">
      <!-- Mission and Vision -->
      <section class="mission-vision">
        <el-row :gutter="40" align="middle">
          <el-col :span="12">
            <h2>我们的使命</h2>
            <p>通过提供卓越的胶粘剂技术和无与伦比的客户服务，帮助我们的客户取得成功。我们致力于持续创新，为各种工业应用提供可靠、高效和环保的解决方案。</p>
          </el-col>
          <el-col :span="12">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" class="section-image"/>
          </el-col>
        </el-row>
      </section>

      <!-- Timeline -->
      <section class="timeline-section">
        <h2 class="section-title">发展历程</h2>
        <el-timeline>
          <el-timeline-item timestamp="2005/4/12" placement="top">
            <el-card>
              <h4>公司成立</h4>
              <p>在一个小车库里，我们开始了对高性能胶粘剂的探索。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2010/8/20" placement="top">
            <el-card>
              <h4>首次重大突破</h4>
              <p>成功研发出第一款具有自主知识产权的环氧树脂胶。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/1/1" placement="top">
            <el-card>
              <h4>建立新工厂</h4>
              <p>扩大生产规模，引进了全自动生产线。</p>
            </el-card>
          </el-timeline-item>
           <el-timeline-item timestamp="2023/12/31" placement="top">
            <el-card>
              <h4>服务全球客户</h4>
              <p>产品远销全球30多个国家和地区。</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-page {
  background-color: #fff;
}

.page-header {
  padding: 60px 20px;
  text-align: center;
  background-color: #f7f8fa;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

section {
  margin-bottom: 60px;
}

.section-title {
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 40px;
}

.section-image {
  width: 100%;
  border-radius: 8px;
}

.timeline-section {
    background-color: #f7f8fa;
    padding: 40px;
    border-radius: 8px;
}
</style>