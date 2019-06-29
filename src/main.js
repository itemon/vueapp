import Vue from 'vue'
import App from './App.vue'
import router from './route/'
import store from './store/'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
})

app.$mount('#app')
