import Vue from 'vue'
import App from './App.vue'
import Skeleton from '../packages'

Vue.config.productionTip = false

Vue.use(Skeleton)
console.log(Skeleton);
new Vue({
  render: h => h(App)
}).$mount('#app')