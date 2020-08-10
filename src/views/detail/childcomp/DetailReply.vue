<template>
  <div>
    <DetailReplyContent
      v-for="(item, index) in replylist"
      :key="item.id"
      :reply="item"
      :floor="index"
    />
  </div>
</template>

<script>
import DetailReplyContent from "./DetailReplyContent";

export default {
  components: {
    DetailReplyContent,
  },
  props: {
    replylist: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>