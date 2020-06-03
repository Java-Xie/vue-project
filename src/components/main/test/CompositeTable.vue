<template>
  <el-tabs>
    <el-tab-pane label="数据展示">
      <template>
        <el-form ref="form" :model="form" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="name:">
                <el-input placeholder="name"/>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" icon="el-icon-search">查询</el-button>
            </el-col>
            <el-col :span="12">
              &nbsp;
            </el-col>
            <el-col :span="2">
              <el-button type="primary" icon="el-icon-plus" @click="add">新增</el-button>
            </el-col>
          </el-row>
        </el-form>
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
    <el-tab-pane label="属性摘要">
      <el-form ref="form" :model="form" label-width="100px" style="width: 600px">
        <el-form-item label="名称：" style="width: 400px">
          <el-input v-model="form['name']"/>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="动态数据表单">
      <el-form ref="form" :model="form" label-width="100px" style="width: 600px">
        <el-form-item v-for="item in formAddDataList" :key="item.key" :label="item.key" style="width: 400px">
          <el-input v-model="item.val"/>
        </el-form-item>
      </el-form>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-plus" @click="add">新增</el-button>
      </el-col>
    </el-tab-pane>
    <el-tab-pane label="属性字段">
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
          label="字段描述"
          align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.name"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="x"
          label="数据类型">
        </el-table-column>
        <el-table-column
          prop="y"
          label="数据单位"
          align="center">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.y"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="z"
          label="是否默认字段">
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'CompositeForm',
  data () {
    return {
      formAdd: ['test1', 'test2'],
      formAddData: {test1: '数据一', test2: '数据二'},
      formAddDataList: [
        {key: 'test1', val: '数据一'},
        {key: 'test2', val: '数据二'}
      ],
      form: {
        name: 'DrillCompoundForm',
        region: '复合表单',
        date1: 'DrillMain Table',
        date2: 'DrillCode Table',
        delivery: false,
        type: [],
        resource: 'DrillDetails Table',
        desc: '复合表单说明'
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
  methods: {
    add: function () {
      // 把动态的数组信息保存为form表单
      let formSave = {}
      for (let i = 0; i < this.formAddDataList.length; i++) {
        formSave[this.formAddDataList[i].key] = this.formAddDataList[i].val
        // formSave.push(this.formAddDataList[i].key, this.formAddDataList[i].val)
      }
      console.log(formSave)
    }
  }
}
</script>

<style scoped>
  .el-pagination{
    text-align: center;
  }
</style>
