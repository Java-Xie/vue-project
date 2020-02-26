<template>
  <el-container>
    <el-header><Head @transferUsers = 'getUser'/></el-header>
    <el-container>
      <el-aside><Left :menus="menus"/></el-aside>
      <el-container>
        <el-main><h1>测试</h1></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Head from './Head'
import Left from './Left'
export default {
  name: 'Index',
  data () {
    return {
      menus: ['测试']
    }
  },
  components: {Left, Head},
  methods: {
    back () {
      this.$router.push('/')
    },
    getUser (msg) {
      this.menus = msg
    }
  }
}
</script>

<style scoped>
</style>
