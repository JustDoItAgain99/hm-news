import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
// import Vant from 'vant'
// import 'vant/lib/index.css'  这个是全局导入用的
// Vue.use(Vant)
import { Button, Field } from 'vant'

Vue.use(Button)
Vue.use(Field)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
