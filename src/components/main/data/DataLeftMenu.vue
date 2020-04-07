<template>
  <el-scrollbar style="height: 700px">
      <el-table
      :data="data"
      @row-click="rowClick">
      <el-table-column
        prop="tableName"
        label="数据表">
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DataLeftMenu',
  data () {
    return {
      tabPosition: 'left',
      data: []
    }
  },
  mounted: function () {
    let thisVue = this
    axios.get('http://localhost/dataconfig/datatable/list/1')
      .then(function (response) {
        thisVue.data = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    rowClick (row) {
      this.$emit('rowTableClick', row.tableName)
    }
  }
}
</script>

<style scoped>
</style>
