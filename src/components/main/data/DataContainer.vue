<template>
  <el-container>
    <el-aside width="200px"><DataLeftMenu @rowTableClick="rowTableClick" /></el-aside>
    <el-container>
      <el-main><DataTable :tabName="tabName"/></el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataTop from './DataTop'
import DataLeftMenu from './DataLeftMenu'
import DataMain from './DataMain'
import DataTable from '../test/DataTable'
export default {
  name: 'DataContainer',
  components: {DataMain, DataTop, DataLeftMenu, DataTable},
  data () {
    return {
      tabName: ''
    }
  },
  methods: {
    rowTableClick (tableName) {
      this.tabName = tableName
    }
  }
}
</script>

<style scoped>

</style>
