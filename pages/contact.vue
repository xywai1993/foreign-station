<template>
  <div class="contact-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>{{ t('contact.title') }}</h1>
      <p>{{ t('contact.subtitle') }}</p>
    </div>

    <div class="page-content">
      <el-row :gutter="40">
        <!-- Contact Form -->
        <el-col :span="12">
          <h3>{{ t('contact.form_title') }}</h3>
          <p>{{ t('contact.form_desc') }}</p>
          <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
            <el-form-item :label="t('contact.form_name_label')" prop="name">
              <el-input v-model="form.name" :placeholder="t('contact.form_name_placeholder')"></el-input>
            </el-form-item>
            <el-form-item :label="t('contact.form_email_label')" prop="email">
              <el-input v-model="form.email" :placeholder="t('contact.form_email_placeholder')"></el-input>
            </el-form-item>
            <el-form-item :label="t('contact.form_message_label')" prop="message">
              <el-input type="textarea" :rows="5" v-model="form.message" :placeholder="t('contact.form_message_placeholder')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">{{ t('contact.form_submit_button') }}</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- Contact Info -->
        <el-col :span="12">
          <h3>{{ t('contact.info_title') }}</h3>
          <div class="contact-info-item">
            <el-icon><location /></el-icon>
            <span>{{ t('footer.contact_address') }}</span>
          </div>
          <div class="contact-info-item">
            <el-icon><phone /></el-icon>
            <span>{{ t('footer.contact_phone') }}</span>
          </div>
          <div class="contact-info-item">
            <el-icon><message /></el-icon>
            <span>{{ t('footer.contact_email') }}</span>
          </div>
          
          <!-- Map -->
          <div class="map-container">
             <img src="https://images.unsplash.com/photo-1572426841539-9b6a585a7f1d?q=80&w=2070&auto=format&fit=crop" style="width:100%; height: 250px; object-fit: cover; border-radius: 8px;"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const { t } = useI18n({ useScope: 'global' });

const formRef = ref<FormInstance>()
const form = ref({
  name: '',
  email: '',
  message: ''
})

const rules = computed<FormRules>(() => ({
  name: [{ required: true, message: t('contact.validation_name_required'), trigger: 'blur' }],
  email: [
    { required: true, message: t('contact.validation_email_required'), trigger: 'blur' },
    { type: 'email', message: t('contact.validation_email_invalid'), trigger: ['blur', 'change'] }
  ],
  message: [{ required: true, message: t('contact.validation_message_required'), trigger: 'blur' }]
}))

const onSubmit = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!', form.value)
      // Here you would typically send the form data to a server
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style scoped>
.contact-page {
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

h3 {
  font-size: 1.8em;
  margin-bottom: 20px;
}

.contact-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1em;
}

.contact-info-item .el-icon {
  margin-right: 10px;
  font-size: 1.2em;
  color: #409EFF;
}

.map-container {
  margin-top: 30px;
}
</style>