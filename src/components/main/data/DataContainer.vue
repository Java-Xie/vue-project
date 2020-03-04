<template>
  <el-container>
    <el-aside width="200px"><DataLeftMenu :data="data" /></el-aside>
    <el-container>
      <el-main><DataTable/></el-main>
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
  props: ['data']
}
</script>

<style scoped>

</style>
