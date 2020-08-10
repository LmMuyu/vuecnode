<template>
  <div class="comment">
    <div class="reply">
      <el-avatar
        class="avatar"
        shape="square"
        :size="50"
        :src="reply.author && reply.author.avatar_url"
      ></el-avatar>
      <div class="content">
        <div>
          <span>{{ floor + 1 }}楼</span>
          <span> {{ reply.author && reply.author.loginname }} </span>
          <span>{{ reply.create_at | detaTiem }}</span>
          <i class="iconfont icon"
            >&#xe654;
            <span>{{
              reply.ups && reply.ups.length !== 0 ? reply.ups.length : ""
            }}</span>
          </i>
        </div>
        <div v-html="reply.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "@/comment/dateFormat";

export default {
  props: {
    reply: {
      type: Object,
      default: () => {},
    },
    floor: Number,
  },
  filters: {
    detaTiem(val) {
      return dateFormat(val);
    },
  },
};
</script>

<style scoped>
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
.content >>> img {
  width: 100%;
}
.reply {
  border: 1px solid #ebedf0;
  border-top: none;
  padding: 8px 0 20px 20px;
  display: flex;
}
.reply .content {
  flex-direction: column;
  width: 100%;
}
.content div {
  padding: 8px 0 0 12px;
  overflow: hidden;
}
.icon {
  float: right;
  margin-right: 15px;
}
.icon > span {
  font-size: 12px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>