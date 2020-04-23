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
              <el-button type="primary" @click="form.delivery = true" icon="el-icon-plus">新增</el-button>
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
        <el-dialog title="添加" :visible.sync="form.delivery" center>
          <el-form :model="form">
            <el-form-item label="alteration_mine" :label-width="formLabelWidth">
              <el-input v-model="form.alteration_mine" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="description" :label-width="formLabelWidth">
              <el-input v-model="form.description" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="form.delivery = false">取 消</el-button>
            <el-button type="primary" @click="addData">确 定</el-button>
          </div>
        </el-dialog>
      </template>
    </el-tab-pane>
    <el-tab-pane label="数据属性">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="名称：">
              <el-input v-model="tabName"></el-input>
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
              <el-input v-model="tableField.length"></el-input>
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
          prop="field_name"
          label="字段名称">
        </el-table-column>
        <el-table-column
          prop="is_primary"
          label="是否主键">
        </el-table-column>
        <el-table-column
          prop="data_type"
          label="数据类型">
        </el-table-column>
        <el-table-column
          prop="is_null"
          label="是否为空">
        </el-table-column>
        <el-table-column
          prop="length"
          label="长度">
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'
import AddDataForm from '../../form/AddDataForm'

export default {
  name: 'DataTable',
  components: {AddDataForm},
  data () {
    return {
      form: {
        name: 'DrillMainTable',
        alteration_mine: '',
        description: '',
        region: '数据表',
        date1: '2',
        date2: 'postgres',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableDataField: null,
      tableData: null,
      tableField: null,
      tableFieldLength: this.tableField != null ? this.tableField.length : 0,
      formLabelWidth: '120px'
    }
  },
  props: ['tabName'],
  methods: {
    addData: function () {
      let thisVue = this
      axios.post('http://localhost/dataconfig/datatable/add', {
        tableName: thisVue.tabName,
        tableData: {
          alteration_mine: thisVue.form.alteration_mine,
          description: thisVue.form.description
        }
      })
        .then(function (response) {
          console.log('返回的数据' + response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  watch: {
    tabName: function () {
      let thisVue = this
      axios.get('http://localhost/dataConfig/dataTable/ListTableContent/' + this.tabName + '/' + 1 + '/' + 4 + '')
        .then(function (response) {
          thisVue.tableDataField = response.data.data.field
          thisVue.tableData = response.data.data.content.data
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('http://localhost/dataConfig/dataTable/getTableFieldInfo/' + this.tabName)
        .then(function (response) {
          thisVue.tableField = response.data
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
