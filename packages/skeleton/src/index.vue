<template>
  <div>
    <loading v-if="defaultLoading && loading" />
    <slot name="loading" v-if="!defaultLoading && loading"></slot>
    <slot v-if="!loading"></slot>
  </div>
</template>

<script>
import Loading from './loading'
export default {
  name: 'Skeleton',
  props: {
    data: {
      type: [Array, Object, Boolean, String]
    },
    defaultLoading: {
      type: Boolean,
      default: true
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
    Loading
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
