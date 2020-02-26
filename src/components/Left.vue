<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu :index="(key).toString()" :key="key" v-for="(menu, key) in menus.menus">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item @click="handleClick" :key="key" v-for="(menu, key) in menu.menus">{{menu.name}}</el-menu-item>
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
    handleClick (key) {
      console.log(key)
    }
  }
}
</script>

<style scoped>

</style>
