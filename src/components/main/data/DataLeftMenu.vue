<template>
  <el-scrollbar style="height: 700px">
      <el-table
      :data="data">
      <el-table-column
        prop="tab"
        label="数据表">
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'DataLeftMenu',
  props: ['data'],
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style scoped>
</style>
