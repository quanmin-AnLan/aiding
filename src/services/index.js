import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

const request = axios.create({
  timeout: 5000,
  baseURL: 'http://api.wnw.icu',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 若请求失败则抛出异常
    Message({
      message: error.msg || '未知错误',
      type: 'error'
    })
    return Promise.reject(error)
  }
)

class Http {
  static get (url, params) {
    return request.get(url, {
      params
    })
  }

  static post (url, params, contentType = 'json') {
    if (contentType === 'urlencoded') {
      return request.post(url, qs.stringify(params))
    } else {
      return request.post(url, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
}

export default Http
