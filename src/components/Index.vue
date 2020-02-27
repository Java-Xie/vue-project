<template>
  <el-container>
    <el-header><Head @transferUsers='getUser'/></el-header>
    <el-container>
      <el-aside><Left @addTab="addTab" :menus="menus"/></el-aside>
      <el-container>
        <el-main>
          <Main ref="main"/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Head from './Head'
import Left from './Left'
import Main from './main/Main'
export default {
  name: 'Index',
  data () {
    return {
      menus: ['测试'],
      tab: {}
    }
  },
  components: {Left, Head, Main},
  methods: {
    back () {
      this.$router.push('/')
    },
    getUser (msg) {
      this.menus = msg
    },
    addTab (tab) {
      this.$refs.main.addTab(tab)
    }
  }
}
</script>

<style scoped>
</style>
