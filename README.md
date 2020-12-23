# vue-skeleton-mini

## Install
```
npm i vue-skeleton-mini --save
```

## Use
```
import Vue from 'vue'
import App from './App.vue'
import Skeleton from 'vue-skeleton-mini'
import 'vue-skeleton-mini/lib/skeleton.css'

Vue.use(Skeleton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
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

## License
MIT