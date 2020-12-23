<template>
  <div id="app">
    <skeleton :data="list">
      <div v-for="(item, index) in list" :key="index">{{item}}</div>
    </skeleton>
    <skeleton :data="formData">
      <div>{{formData.username}}</div>
    </skeleton>
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
        username: 'kun'
      }
    }, 1000);
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

</style>
