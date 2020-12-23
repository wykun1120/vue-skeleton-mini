<template>
  <div class="kun-skeleton-loading-container">
    <div class="kun-skeleton-loading-block kun-skeleton-loading-block-start"></div>
    <div class="kun-skeleton-loading-block"></div>
    <div class="kun-skeleton-loading-block"></div>
    <div class="kun-skeleton-loading-block kun-skeleton-loading-block-end"></div>
  </div>
</template>

<script>
export default {
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
.kun-skeleton-loading-block-start {
  width: 40%;
}
.kun-skeleton-loading-block-end {
  width: 60%;
}
</style>
