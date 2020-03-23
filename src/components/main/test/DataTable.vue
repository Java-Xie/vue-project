<template>
  <el-tabs type="card">
    <el-tab-pane label="数据展示">
      <template>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-col :span="4">
              <span>name:</span>
            </el-col>
            <el-col :span="10">
              <el-input placeholder="name"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button type="primary" icon="el-icon-search">查询</el-button>
            </el-col>
          </el-col>
          <el-col :span="10">
            <div>&nbsp;</div>
          </el-col>
          <el-col :span="4">
              <el-button type="primary" icon="el-icon-plus">新增</el-button>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id">
          </el-table-column>
          <el-table-column
            prop="name"
            label="name">
          </el-table-column>
          <el-table-column
            prop="x"
            label="x">
          </el-table-column>
          <el-table-column
            prop="y"
            label="y">
          </el-table-column>
          <el-table-column
            prop="z"
            label="z">
          </el-table-column>
          <el-table-column
            prop="length"
            label="length">
          </el-table-column>
          <el-table-column
            prop="openDate"
            label="openDate">
          </el-table-column>
          <el-table-column
            prop="bool"
            label="是否拓展字段">
          </el-table-column>
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
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
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="行数：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="所有者：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <h2>字段</h2>
      <el-table
        :data="tableField"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="字段名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="是否主键">
        </el-table-column>
        <el-table-column
          prop="x"
          label="字段类型">
        </el-table-column>
        <el-table-column
          prop="y"
          label="是否为空">
          <template slot-scope="scope">
<!--            <el-input v-model="scope.row.y" placeholder="请输入内容"></el-input>-->
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
export default {
  name: 'DataTable',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        id: 1,
        name: 'DrillID',
        x: 1,
        y: 2,
        z: 3,
        length: 20,
        openDate: '2016-05-02',
        bool: '否'
      }, {
        id: 2,
        name: 'DrillName',
        x: 1,
        y: 2,
        z: 3,
        length: 20,
        openDate: '2016-05-02',
        bool: '否'
      }],
      tableField: [{
        id: 1,
        name: 'DrillID',
        x: 1,
        y: false,
        z: 3,
        length: 20,
        openDate: '2016-05-02',
        bool: '否'
      }, {
        id: 2,
        name: 'DrillName',
        x: 1,
        y: true,
        z: 3,
        length: 20,
        openDate: '2016-05-02',
        bool: '否'
      }]
    }
  }
}
</script>

<style scoped>
.el-pagination{
  text-align: center;
}
</style>
