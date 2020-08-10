<template>
  <RecycleScroller
    class="scroller"
    :items="list"
    :item-size="70"
    key-field="author_id"
    v-slot="{ item }"
    page-mode
  >
    <HomeCententPost :listPost="item"></HomeCententPost>
  </RecycleScroller>
</template>

<script>

import { RecycleScroller } from "vue-virtual-scroller";

import HomeCententPost from "./HomeCententPost";

export default {
  components: {
    HomeCententPost,
    RecycleScroller,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>