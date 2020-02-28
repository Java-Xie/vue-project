<template>
  <el-card shadow="hover">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="16">
        <el-input
          placeholder="内容填写区"
          :disabled="true">
        </el-input>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'TextForm',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>

</style>
