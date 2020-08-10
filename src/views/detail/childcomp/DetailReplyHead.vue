<template>
  <div>
    <div class="num_reply">{{ replynum }}回复</div>
  </div>
</template>

<script>
export default {
  props: {
    replynum: Number,
  },
};
</script>

<style scoped>
.num_reply {
  border: 1px solid #ebedf0;
  padding: 15px 12px;
  font-weight: 700;
}
</style>