<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <el-card class="box-card">
        <div slot="header">
          <span>表单名称</span>
          <el-button style="float: right; padding: 3px 0" @click="test" type="text">保存</el-button>
        </div>
        <el-row :key="control.name" v-for="control in controls">
          <component :is="control.content"/>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <div slot="header">
          <span>表单控件</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <el-row>
          <el-button type="primary" @click="addText">文本控件</el-button>
        </el-row>
        <el-row>
          <el-button type="primary">数值控件</el-button>
        </el-row>
        <el-row>
          <el-button type="primary">时间控件</el-button>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import TextForm from '../form/TextForm'
import NumberForm from '../form/NumberForm'
import axios from 'axios'
import {test} from '../../api/test'
export default {
  name: 'Form',
  components: {TextForm, NumberForm},
  data () {
    return {
      edit: false,
      controls: []
    }
  },
  beforeMount: function () {
    let thisVue = this
    // 为给定 ID 的 user 创建请求
    axios.get('/static/form/demo.form')
      .then(function (response) {
        thisVue.controls = response.data.controls
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    addText () {
      let newName = 1
      if (this.controls.length !== 0) {
        newName = ++this.controls[this.controls.length - 1].name + ''
      }
      this.controls.push({
        title: '新增',
        name: newName,
        content: 'TextForm'
      })
    },
    test () {
      console.log(test())
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 10px;
  }
</style>
