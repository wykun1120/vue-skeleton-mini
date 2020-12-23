# vue-skeleton-mini

## Install
```
npm i vue-skeleton-mini --save
```

## Use
```
import Vue from 'vue'
import App from './App.vue'
import Skeleton from '../packages'

Vue.config.productionTip = false

Vue.use(Skeleton)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

## Example
```
<skeleton :data="list">
  <div>
    <div v-for="(item, index) in list" :key="index">{{item}}</div>
  </div>
</skeleton>
```