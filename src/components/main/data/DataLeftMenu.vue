<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane v-for="d in data" :key="d.name" :label="d.tab"></el-tab-pane>
  </el-tabs>
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
