<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu :index="key.toString()" :key="key" v-for="(menu, key) in menus.menus">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item @click="handleClick(tab)" :index="key + '-' + keyZ" :key="keyZ" v-for="(tab, keyZ) in menu.menus">{{tab.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Left',
  data () {
    return {
      opened: 0
    }
  },
  props: ['menus'],
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (tab) {
      console.log(tab)
      this.$emit('addTab', tab)
    }
  }
}
</script>

<style scoped>
</style>
