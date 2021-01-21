<template>
  <div class="kun-skeleton-loading-container" :class="{animate}">
    <div class="kun-skeleton-loading-block kun-skeleton-loading-block-start"></div>
    <div class="kun-skeleton-loading-block"></div>
    <div class="kun-skeleton-loading-block"></div>
    <div class="kun-skeleton-loading-block kun-skeleton-loading-block-end"></div>
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
.kun-skeleton-loading-block-start {
  width: 40%;
}
.kun-skeleton-loading-block-end {
  width: 60%;
}
.animate .kun-skeleton-loading-block {
  background: linear-gradient(90deg,hsla(0,0%,74.5%,.2) 25%,hsla(0,0%,50.6%,.24) 37%,hsla(0,0%,74.5%,.2) 63%);
  animation: vue-skeleton-loading 1.4s ease infinite;
  background-size: 400% 100%
}

@keyframes vue-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
