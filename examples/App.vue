<template>
  <div id="app">
    <skeleton :data="list">
      <div v-for="(item, index) in list" :key="index">{{item}}</div>
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
      console.log(this.list);
    }, 1000);
  },
  data() {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
