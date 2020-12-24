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

## Demo
https://wykun1120.github.io/vue-skeleton-mini/

## Config
| 参数 | 功能 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| data | 监听的数据 | any | - | null |
| defaultRender | 默认样式 | boolean | - | true |
| animate | 动画 | boolean | - | false |
| animateName | 内置骨架 | string | table, line | '' |
| all | 多数据同时监听 | boolean | - | false |
| timeOut | 超时 | number | - | 0 |
## animateName

## Example
```
<!-- 默认 -->
<skeleton :data="list">
  <div class="list-item" v-for="(item, index) in list" :key="index">{{item}}</div>
</skeleton>

<!-- 动画 -->
<skeleton :data="formData" animate>
  <div>{{formData.username}}</div>
</skeleton>

<!-- 自定义 -->
<skeleton :data="formData" :defaultLoading="false">
  <template v-slot:custom>
    <div>Skeleton</div>
  </template>
  <div>{{formData.username}}</div>
</skeleton>

<!-- 多数据同时满足 -->
<div class="container">
  <skeleton :data="[list, formData]" all animateName="line">
    <div class="list-item" v-for="(item, index) in list" :key="index">{{item}}</div>
  </skeleton>
</div>
```

## License
MIT