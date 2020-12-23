<template>
  <div class="kun-skeleton-table-container">
    <div class="kun-skeleton-table-block" v-for="(item, index) in tableBlcokList" :key="index">
      <div class="kun-skeleton-table-block-item" v-for="(itemInner, indexInner) in item" :key="indexInner">{{itemInner}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      tableBlcokList: [
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']
      ]
    }
  }
}
</script>

<style scoped>
.kun-skeleton-table-container {
  padding: 30px 20px;
}
.kun-skeleton-table-block {
  box-sizing: border-box;
  height: 30px;
  display: flex;
  margin-bottom: 20px;
}
.kun-skeleton-table-block {
  border: 1px solid #e6edf4;
  /* border-bottom: 0; */
}
.kun-skeleton-table-block-item {
  height: 30px;
  flex: 1;
  border-right: 1px solid #e6edf4;
}
.kun-skeleton-table-block-item:last-of-type {
  border-right: 0;
}
.kun-skeleton-table-block:last-of-type {
  border-bottom: 1px solid #e6edf4;
}

</style>
