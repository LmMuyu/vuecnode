<template>
  <div class="post">
    <div class="centent">
      <el-avatar :size="50" :src="listPost.author.avatar_url"></el-avatar>
      <div class="show-input">
        <span>{{ listPost.reply_count }}</span>
        <em>/{{ listPost.visit_count }}</em>
      </div>
      <el-button
        size="small "
        :type="listPost.tab ? $tab[listPost.tab].type : 'danger'"
      >
        {{
          listPost.tab
            ? $tab[listPost.tab] && $tab[listPost.tab].name
            : "无分类"
        }}
      </el-button>
    </div>
    <div class="text">
      <router-link :to="{ path: `/detail/${listPost.id}` }">
        {{ listPost.title }}
      </router-link>
    </div>
    <div class="time">
      <span>{{ listPost.last_reply_at | dateFormat }}</span>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "@/comment/dateFormat";

export default {
  props: {
    listPost: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      elsf: this,
    };
  },
  filters: {
    dateFormat(val) {
      return dateFormat(val);
    },
  },
};
</script>

<style scoped>
.post {
  padding: 10px;
  display: flex;
  align-items: center;
}
.show-input > em {
  font-size: 14px;
  color: rgb(128, 128, 128);
}
.show-input > span {
  color: rgb(128, 0, 128);
  font-size: 16.8px;
}
.text {
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 3px;
  margin-left: 20px;
}
.text > a {
  color: rgb(66, 185, 131);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  flex: 1;
}
.time {
  flex: 1;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  display: flex;
  flex-direction: row-reverse;
}
.centent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
}
</style>