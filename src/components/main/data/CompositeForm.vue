<template>
  <el-container>
    <el-aside width="200px"><DataLeftMenu :data="data" /></el-aside>
    <el-container>
      <el-main><CompositeTable/></el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataMain from './DataMain'
import DataTop from './DataTop'
import DataLeftMenu from './DataLeftMenu'
import DataTable from '../test/DataTable'
import CompositeTable from '../test/CompositeTable'

export default {
  name: 'CompositeForm',
  components: {DataMain, DataTop, DataLeftMenu, DataTable, CompositeTable},
  props: ['data']
}
</script>

<style scoped>

</style>
