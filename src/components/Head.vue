<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <template v-for="(menu, key) in menus">
      <el-menu-item :index="(key + 1).toString()" :key="key">{{menu.name}}</el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Head',
  data () {
    return {
      activeIndex: '1',
      menus: []
    }
  },
  beforeCreate: function () {
    console.log('创建')
    let thisVue = this
    // 为给定 ID 的 user 创建请求
    axios.get('/static/json/menu.json')
      .then(function (response) {
        thisVue.menus = response.data.menus
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    handleSelect (key) {
      console.log(this.menus[key - 1])
      this.$emit('transferUsers', this.menus)
    }
  }
}
</script>

<style scoped>

</style>
