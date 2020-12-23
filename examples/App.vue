<template>
  <div id="app">
    <h1>默认样式</h1>
    <div class="container">
      <skeleton :data="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">{{item}}</div>
      </skeleton>
    </div>
    <h1>动画</h1>
    <div class="container">
      <skeleton :data="formData" animate>
        <div>{{formData.username}}</div>
      </skeleton>
    </div>
    <h1>自定义</h1>
    <div class="container">
      <skeleton :data="formData" :defaultLoading="false">
        <template v-slot:custom>
          <div>Skeleton</div>
        </template>
        <div>{{formData.username}}</div>
      </skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  mounted() {
    setTimeout(() => {
      this.list = [1,2,3]
      this.formData = {
        username: 'username'
      }
    }, 2000);
  },
  data() {
    return {
      list: [],
      formData: {}
    }
  }
}
</script>

<style>
.container {
  height: 200px;
}
.list-item {
  padding: 10px;
}
</style>
