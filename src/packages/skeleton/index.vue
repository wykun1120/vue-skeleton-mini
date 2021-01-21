<template>
  <div>
    <default :animate="animate" v-if="defaultRender && loading && animateName === ''" />
    <table-skeleton v-if="animateName === constants.TABLE_SKELETON && loading" :animate="animate" />
    <line-skeleton v-if="animateName === constants.LINE_SKELETON && loading" :animate="animate" />
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
    },
    all: {
      type: Boolean,
      default: false
    },
    timeOut: {
      type: Number,
      default: 0
    }
  },
  watch: {
    data: {
      handler (newVal, oldVal) {
        if (this.all) {
          const allChange = newVal.every((item, index) => item !== oldVal[index])
          if (allChange) {
            this.changeLoading()
          }
        } else {
          this.changeLoading()
        }
      },
      deep: true
    }
  },
  created () {
    if (this.timeOut > 0) {
      setTimeout(() => {
        this.changeLoading()
      }, this.timeOut)
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
  },
  methods: {
    changeLoading () {
      if (this.loading) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
