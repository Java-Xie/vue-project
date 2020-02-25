<template>
  <el-card>
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </el-col>
    </el-row>
    <el-button type="primary" @click="login" round>登录</el-button>
  </el-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('账号为：' + this.username + '，密码为：' + this.password)
      let thisVue = this
      // 为给定 ID 的 user 创建请求
      axios.get('http://localhost:8080/register?name=' + this.username + '&pwd=' + this.password)
        .then(function (response) {
          console.log(response)
          thisVue.$router.push('/Ind')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.el-row {
  margin-bottom: 10px;
}
.el-col {
  border-radius: 4px;
}
</style>
