import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置baseUrl选项，表示Url公共部分
  baseURL: 'http://localhost:8080'
  // 超时时间
  // timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
  // 设置token
  config.headers['Authorization'] = 'TokenAuthorization'
  return config
}, error => {
  console.log(error)
})

// response拦截器
service.interceptors.response.use(res => {
  // 得到res的内容
  console.log(res)
  location.reload() // 为了重新实例化vue-router对象 避免bug
})

export default service
