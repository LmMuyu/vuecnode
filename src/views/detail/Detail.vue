<template>
  <div>
    <HeadTitle />
    <div class="box_sizing">
      <div class="left_show">
        <DetailLeftShow :authorinfo="ContentInfo" />
        <DetailReplyHead :replynum="replynum" />
        <DetailReply :replylist="ContentInfo.replies" />
      </div>
      <div>
        <DetailAuthorInfo :authorinfo="AuthorInfo" />
        <DetailTopic
          :topiclist="AuthorInfo.recent_topics"
          title="最近创建的话题"
        />
        <DetailTopic
          :topiclist="AuthorInfo.recent_replies"
          title="最近参与的话题"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";

import DetailAuthorInfo from "./childcomp/DetailAuthorInfo";
import DetailReplyHead from "./childcomp/DetailReplyHead";
import DetailLeftShow from "./childcomp/DetailLeftShow";
import DetailReply from "./childcomp/DetailReply";
import DetailTopic from "./childcomp/DetailTopic";

import { getDetailInfo, getUserByName } from "@/utils/detail";

export default {
  components: {
    DetailAuthorInfo,
    DetailReplyHead,
    DetailLeftShow,
    DetailReply,
    DetailTopic,
    HeadTitle,
  },
  props: {
    id: {
      String,
      default: () => "",
    },
  },
  data() {
    return {
      ContentInfo: {},
      replynum: 0,
      author_loginname: "",
      AuthorInfo: {},
    };
  },
  watch: {
    author_loginname: {
      handler(newval) {
        this.getUserByName(newval);
      },
    },
    immediate: true,
  },
  created() {
    this.getDateilInfo(this.id);
  },
  methods: {
    getDateilInfo(id) {
      getDetailInfo(id)
        .then(({ data: { data } }) => {
          this.author_loginname = data.author.loginname;
          this.ContentInfo = data;
          this.replynum = data.replies && data.replies.length;

          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserByName(loginname) {
      getUserByName(loginname)
        .then(({ data: { data } }) => {
          console.log(data);
          this.AuthorInfo = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.getDateilInfo(this.id);
    next();
  },
};
</script>

<style scoped>
.box_sizing {
  display: flex;
}
.left_show {
  width: 72%;
  height: 100%;
  box-shadow: #0000001a 0px 2px 12px 0px;
  margin: 37.5px;
  padding: 20px;
}
</style>