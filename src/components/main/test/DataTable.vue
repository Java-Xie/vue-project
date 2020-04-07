<template>
  <el-tabs>
    <el-tab-pane label="数据展示">
      <template>
        <el-form ref="form" :model="form" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="name:">
                <el-input  placeholder="name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" icon="el-icon-search">查询</el-button>
            </el-col>
            <el-col :span="12">
              &nbsp;
            </el-col>
            <el-col :span="2">
              <el-button type="primary" icon="el-icon-plus">新增</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            v-for="field in tableDataField"
            :key="field"
            :prop="field"
            :label="field">
          </el-table-column>
        </el-table>
      </template>
    </el-tab-pane>
    <el-tab-pane label="数据属性">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="类型：">
              <el-input v-model="form.region"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="行数：">
              <el-input v-model="form.date1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="所有者：">
              <el-input v-model="form.date2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <h2>{{tabName}}</h2>
      <el-table
        :data="tableField"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="字段名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="是否主键"
          align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.name"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          prop="x"
          label="字段类型">
        </el-table-column>
        <el-table-column
          prop="y"
          label="是否为空"
          align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.y"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          prop="z"
          label="长度">
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DataTable',
  data () {
    return {
      form: {
        name: 'DrillMainTable',
        region: '数据表',
        date1: '2',
        date2: 'postgres',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableDataField: [],
      tableData: [],
      tableField: [{
        id: 'ID',
        name: 'DrillID',
        x: 'UUID',
        y: false,
        z: 32,
        length: 20,
        openDate: '2016-05-02',
        bool: '否'
      }, {
        id: 'Name',
        name: false,
        x: 'VARCHAR',
        y: true,
        z: 255,
        length: 20,
        openDate: '2016-05-02',
        bool: '否'
      }]
    }
  },
  props: ['tabName'],
  watch: {
    tabName: function () {
      let thisVue = this
      axios.get('http://localhost/dataconfig/datatable/ListTableContent/' + this.tabName + '/' + 1 + '/' + 4 + '')
        .then(function (response) {
          thisVue.tableDataField = response.data.field
          thisVue.tableData = response.data.content
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.el-pagination{
  text-align: center;
}
</style>
