<template>
  <div class="author">
    <div class="author_info">
      <div class="avatar_name">
        <router-link :to="`/file/${authorinfo.loginname}`">
          <el-avatar
          shape="square"
          size="large"
          :src="authorinfo.avatar_url"
        ></el-avatar>
        </router-link>
        <router-link :to="{path:`/file/${authorinfo.loginname}`}">{{ authorinfo.loginname }}</router-link>
        <div></div>
      </div>
      <div class="info">
        <span>积分：{{ authorinfo.score }}</span>
        <span
          >Github：<a
            :href="`https://github.com/${authorinfo.githubUsername}`"
           target="_blank" >{{ authorinfo.githubUsername }}</a
          ></span
        >
        <span>注册时间：{{ authorinfo.create_at | datetime }}</span>
      </div>
    </div>
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
    datetime(val) {
      return dateFormat(val);
    },
  },
};
</script>

<style scoped>
a {
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
.author_info {
  width: 260px;
  box-shadow: #0000001a 0px 2px 12px 0px;
  padding: 20px;
  margin-top: 37.5px;
  margin-right: 37.5px;
}
.avatar_name {
  display: flex;
  align-items: center;
}
.avatar_name > div {
  margin-left: 20px;
  font-weight: 600;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.info > span {
  padding: 5px 0;
}
</style>