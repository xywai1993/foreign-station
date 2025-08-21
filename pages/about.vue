<template>
  <div class="about-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>{{ t('about.title') }}</h1>
      <p>{{ t('about.subtitle') }}</p>
    </div>

    <div class="page-content">
      <!-- Mission and Vision -->
      <section class="mission-vision">
        <el-row :gutter="40" align="middle">
          <el-col :span="12">
            <h2>{{ t('about.mission_title') }}</h2>
            <p>{{ t('about.mission_text') }}</p>
          </el-col>
          <el-col :span="12">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" class="section-image"/>
          </el-col>
        </el-row>
      </section>

      <!-- Timeline -->
      <section class="timeline-section">
        <h2 class="section-title">{{ t('about.history_title') }}</h2>
        <el-timeline>
          <el-timeline-item timestamp="2005/4/12" placement="top">
            <el-card>
              <h4>{{ t('about.history_2005_title') }}</h4>
              <p>{{ t('about.history_2005_text') }}</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2010/8/20" placement="top">
            <el-card>
              <h4>{{ t('about.history_2010_title') }}</h4>
              <p>{{ t('about.history_2010_text') }}</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/1/1" placement="top">
            <el-card>
              <h4>{{ t('about.history_2018_title') }}</h4>
              <p>{{ t('about.history_2018_text') }}</p>
            </el-card>
          </el-timeline-item>
           <el-timeline-item timestamp="2023/12/31" placement="top">
            <el-card>
              <h4>{{ t('about.history_2023_title') }}</h4>
              <p>{{ t('about.history_2023_text') }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' });
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