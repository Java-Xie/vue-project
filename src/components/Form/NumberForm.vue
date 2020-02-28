<template>
  <el-card shadow="hover">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入数值内容"></el-input>
      </el-col>
      <el-col :span="16">
        <el-input-number v-model="num" :disabled="true"></el-input-number>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'NumberForm',
  data () {
    return {
      input: '',
      num: 1
    }
  }
}
</script>

<style scoped>

</style>
