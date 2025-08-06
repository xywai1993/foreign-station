<template>
  <div class="contact-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>联系我们</h1>
      <p>我们期待与您交流，解答您的疑问，共同探讨合作机会。</p>
    </div>

    <div class="page-content">
      <el-row :gutter="40">
        <!-- Contact Form -->
        <el-col :span="12">
          <h3>发送在线消息</h3>
          <p>请填写下表，我们的技术顾问会尽快与您联系。</p>
          <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
            <el-form-item label="您的姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-form-item label="您的邮箱" prop="email">
              <el-input v-model="form.email" placeholder="请输入您的电子邮箱"></el-input>
            </el-form-item>
            <el-form-item label="您的留言" prop="message">
              <el-input type="textarea" :rows="5" v-model="form.message" placeholder="请在此输入您的需求或问题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- Contact Info -->
        <el-col :span="12">
          <h3>联系信息</h3>
          <div class="contact-info-item">
            <el-icon><location /></el-icon>
            <span>地址：中国上海市浦东新区世纪大道100号</span>
          </div>
          <div class="contact-info-item">
            <el-icon><phone /></el-icon>
            <span>电话：+86 21 1234 5678</span>
          </div>
          <div class="contact-info-item">
            <el-icon><message /></el-icon>
            <span>邮箱：sales@industrial-glue.com</span>
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
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()
const form = ref({
  name: '',
  email: '',
  message: ''
})

const rules = ref<FormRules>({
  name: [{ required: true, message: '姓名为必填项', trigger: 'blur' }],
  email: [{ required: true, message: '邮箱为必填项', trigger: 'blur' }, { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] }],
  message: [{ required: true, message: '留言为必填项', trigger: 'blur' }]
})

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