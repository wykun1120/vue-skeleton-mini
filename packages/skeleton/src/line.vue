<template>
  <div class="kun-skeleton-loading-container" :class="{animate}">
    <div class="kun-skeleton-loading-block"></div>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean
    }
  },
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.kun-skeleton-loading-container {
  box-sizing: border-box;
  padding: 30px 20px;
}
.kun-skeleton-loading-block {
  width: 100%;
  height: 16px;
  background: hsla(0,0%,74.5%,.2);
  margin-bottom: 20px;
}
</style>
