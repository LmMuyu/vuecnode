<template>
  <div>
    <div class="title">{{ authorinfo.title }}</div>
    <div class="author_info">
      <span
        >&nbsp;发布于：{{ authorinfo.create_at | detetime }}&nbsp;•&nbsp;</span
      >
      <span
        ><a :href="authorinfo.author && authorinfo.author.avatar_url">
          &nbsp;作者：{{
            authorinfo.author && authorinfo.author.loginname
          }}&nbsp;•&nbsp;</a
        ></span
      >
      <span>&nbsp;{{ authorinfo.visit_count }}次浏览&nbsp;•&nbsp;</span>
      <span
        >&nbsp;来自：{{ $tab[authorinfo] && $tab[authorinfo.tab].type }}</span
      >
    </div>
    <div v-html="authorinfo.content" class="content"></div>
  </div>
</template>

<script>
import { dateFormat } from "@/comment/dateFormat";

export default {
  props: {
    authorinfo: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    detetime(val) {
      return dateFormat(val);
    },
  },
};
</script>

<style scoped>
.author_info a {
  color: #42b983;
  text-decoration: none;
}
.title {
  font-size: 25px;
  font-weight: 700;
  margin: 0 0 8px;
}

.content >>> .markdown-text a {
  color: #42b983;
  display: inline;
  font-size: 14px;
  font-weight: 600;
  gap: normal;
  line-height: 22.4px;
  padding: 0px 2px;
  text-align: left;
  text-decoration: none;
}
.content >>> h2 {
  border-bottom: 1px solid #ddd;
  color: rgb(51, 51, 51);
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 14px;
  margin: 35px 0px 15px 0px;
  text-align: left;
}
.content >>> img {
  width: 100%;
}
.content >>> p {
  color: rgb(51, 51, 51);
}
</style>