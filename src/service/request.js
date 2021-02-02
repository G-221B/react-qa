import axios from 'axios'
import { message } from 'antd'
import { baseURL, timeout } from './config'
import { getDataFromStorage, clearStorageByKey } from '@/utils'
let requestArr = []
const request = axios.create({
  baseURL,
  timeout
})
request.interceptors.request.use(config => {
  let source = axios.CancelToken.source()
  const token = getDataFromStorage('token')
  token && (config.headers.authorization = 'Bearer ' + token)
  config.cancelToken = source.token
  requestArr.push(source)
  return config
}, err => {
  return err
})

request.interceptors.response.use(res => {
  switch (res.data.status) {
    case -1:
      message.error({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: res.data.msg
      })
      break;
    case 401:
      message.error({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: '登陆已过期'
      })
      requestArr.forEach(item => {
        item.cancel()
      })
      requestArr.length = 0
      clearStorageByKey('token')
      clearStorageByKey('account')
      break;
    default:
  }
  return res.data
}, err => {
  return err
})

export default request