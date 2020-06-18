// 插件模块
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
    // 设置基准地址  (改成你自己的接口地址)
    axios.defaults.baseURL='http://39.105.34.171:8080/showvideo/'
    // 4. 添加实例方法
    Vue.prototype.$http = axios
  }

  export default MyHttpServer

