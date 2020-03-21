<template>
  <el-table
    :data="data"
    max-height="700">
    <el-table-column
      prop="tab"
      label="数据表">
    </el-table-column>
  </el-table>
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
