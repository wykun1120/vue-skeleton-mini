<template>
  <div>
    <default :animate="animate" v-if="defaultLoading && loading && animateName === ''" />
    <slot name="custom" v-if="!defaultLoading && loading"></slot>
    <slot v-if="!loading"></slot>
  </div>
</template>

<script>
import Default from './default'
export default {
  name: 'Skeleton',
  props: {
    data: {
      type: [Array, Object, Boolean, String]
    },
    defaultLoading: {
      type: Boolean,
      default: true
    },
    animate: {
      type: Boolean,
      default: false
    },
    animateName: {
      type: String,
      default: ''
    }
  },
  watch: {
    data: {
      handler() {
        console.log('change');
        if (this.loading) {
          this.loading = false
        }
      },
      deep: true
    }
  },
  components: {
    Default
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style scoped>

</style>
