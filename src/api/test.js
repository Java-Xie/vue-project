import service from '../utils/request'

// 测试方法
export function test () {
  return service.get('/register')
}
