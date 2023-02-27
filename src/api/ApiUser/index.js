import Http from '../../services/index'

const baseApi = '/user'

const apis = {
  // 登录
  login: (params) => Http.post(`${baseApi}/login`, params),
  // 查询用户信息
  getUserInfo: (params) => Http.get(`${baseApi}/getUserInfo`, params)
}

export default apis
