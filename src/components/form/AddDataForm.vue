<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row :gutter="20">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="10">
        <el-form-item label="alteration_mine:">
          <el-input v-model="form.alteration_mine"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="10">
        <el-form-item label="description:">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="10">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'AddDataForm',
  data () {
    return {
      form: {
        alteration_mine: '',
        description: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log('提交表单')
    }
  }

}
</script>

<style scoped>

</style>
