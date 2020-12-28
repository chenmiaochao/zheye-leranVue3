import { createApp } from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App.vue'
axios.defaults.baseURL = 'http://apis.imooc.com/api/'

axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  // 替换 baseURL
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: '05D9B1DA114D8400' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '05D9B1DA114D8400')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '05D9B1DA114D8400' }
  }
  return config
})
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
