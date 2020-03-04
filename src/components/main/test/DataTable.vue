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
      配置管理
      <el-row :gutter="20">
        <el-col :span="1">
          <span>name:</span>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="name"></el-input>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'DataTable',
  data () {
    return {
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
