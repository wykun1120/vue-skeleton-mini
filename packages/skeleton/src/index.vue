<template>
  <div>
    <default :animate="animate" v-if="defaultRender && loading && animateName === ''" />
    <table-skeleton v-if="animateName === constants.TABLE_SKELETON && loading" />
    <line-skeleton v-if="animateName === constants.LINE_SKELETON && loading" />
    <slot name="custom" v-if="!defaultRender && loading"></slot>
    <slot v-if="!loading"></slot>
  </div>
</template>

<script>
import Default from './default'
import TableSkeleton from './table'
import LineSkeleton from './line'
import CONSTANTS from './constants'
export default {
  name: 'Skeleton',
  props: {
    data: {
      type: [Array, Object, Boolean, String],
      default: null
    },
    defaultRender: {
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
    Default,
    TableSkeleton,
    LineSkeleton
  },
  data () {
    return {
      loading: true,
      constants: CONSTANTS
    }
  }
}
</script>

<style scoped>

</style>
