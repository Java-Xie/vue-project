<template>
  <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      <component v-if="item.content !== 'DataContainer'" :is="item.content"/>
      <component v-if="item.content === 'DataContainer'" :is="item.content" :data="item.data"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Demo from './Demo'
import Test from './Test'
import Form from './Form'
import TextForm from '../form/TextForm'
import DataContainer from './data/DataContainer'
export default {
  name: 'Main',
  components: {Demo, Test, Form, TextForm, DataContainer},
  data () {
    return {
      editableTabs: [{
        title: '首页',
        name: '1',
        content: 'Form'
      }],
      editableTabsValue: '1',
      tabIndex: 2
    }
  },
  props: [],
  methods: {
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    addTab (tab) {
      let b = this.editableTabs.findIndex(function (s) {
        return s.title === tab.name
      })
      if (b === -1) {
        b = ++this.tabIndex + ''
        this.editableTabs.push({
          title: tab.name,
          name: b,
          content: tab.content,
          data: tab.data
        })
        this.editableTabsValue = b
      } else {
        this.editableTabsValue = this.editableTabs[b].name
      }
    }
  }
}
</script>

<style scoped>

</style>
