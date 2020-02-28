<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <template v-for="(menu, key) in menus">
      <el-menu-item :index="(key).toString()" :key="key">{{menu.name}}</el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Head',
  data () {
    return {
      activeIndex: '0',
      menus: []
    }
  },
  mounted: function () {
    let thisVue = this
    // 为给定 ID 的 user 创建请求
    axios.get('/static/json/menu.json')
      .then(function (response) {
        thisVue.menus = response.data.menus
        thisVue.$emit('transferUsers', thisVue.menus[thisVue.activeIndex])
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    handleSelect (key) {
      this.$emit('transferUsers', this.menus[key])
    }
  }
}
</script>

<style scoped>

</style>
