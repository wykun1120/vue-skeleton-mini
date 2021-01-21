import Vue from 'vue'
import App from './App.vue'
import Skeleton from './packages/index.js'
Vue.config.productionTip = false
Vue.use(Skeleton)
new Vue({
  render: h => h(App)
}).$mount('#app')
