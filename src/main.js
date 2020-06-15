import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui';
import './assets/font_q59895pmnf/iconfont.css'
import './assets/font_59jtkgb6sq4/iconfont.css'
import './plugins/element.js'
import MyHttpServer from './util/util.js'

Vue.use(MyHttpServer)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
