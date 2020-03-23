<template>
  <el-container>
    <el-aside width="200px">
      <el-tree :data="data" :props="defaultProps"/>
    </el-aside>
    <el-container>
      <el-main><CustomTable/></el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataTop from './DataTop'
import DataLeftMenu from './DataLeftMenu'
import DataMain from './DataMain'
import DataTable from '../test/DataTable'
import CustomTable from '../test/CustomTable'
export default {
  data () {
    return {
      data: [{
        label: '类别一',
        children: [{
          label: 'form1'
        }, {
          label: 'form2'
        }]
      }, {
        label: '类别二',
        children: [{
          label: 'form3'
        }, {
          label: 'form4'
        }]
      }, {
        label: '类别三',
        children: [{
          label: 'form5'
        }, {
          label: 'form6'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  name: 'CustomForm',
  components: {DataMain, DataTop, DataLeftMenu, DataTable, CustomTable}
}
</script>

<style scoped>

</style>
