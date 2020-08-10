<template>
  <div class="centent">
    <div class="text_centent">
      <el-tabs v-model="tab" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in tabs"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        >
          <HomeCententContainer :list="list" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import HomeCententContainer from "./HomeCententContainer";

import { getTopics } from "@/utils/home.js";

export default {
  components: {
    HomeCententContainer,
  },
  data() {
    return {
      page: 1,
      limit: 20,
      tab: "all",
      list: [],
      store: {}, // 存储所有Tab对应的数据，因为切换Tab后就没必要重新以limit:20加载数据。
      tabs: [
        {
          label: "全部",
          name: "all",
        },
        {
          label: "精华",
          name: "good",
        },
        {
          label: "分享",
          name: "share",
        },
        {
          label: "问答",
          name: "ask",
        },
        {
          label: "招聘",
          name: "job",
        },
      ],
    };
  },
  watch: {
    tab(newval) {
      console.log(newval);
    },
  },
  created() {
    this.getTopics();
    // document.addEventListener("scroll", this.scrollButtom);
  },
  methods: {
    handleClick() {
      let store = this.store;

      if (!store[this.tab]) {
        this.limit = 20;
        this.list = [];
        this.getTopics();
        return;
      }

      this.limit = store[this.tab].limit;
      this.list = store[this.tab].list;
    },
    getTopics() {
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab,
      })
        .then(({ data }) => {
          this.list = data.data;
          this.limit += 10;

          let store = this.store;
          store[this.tab] = {
            list: this.list,
            limit: this.limit,
          };
        })
        .catch(() => {
          this.$message.error("网络出现错误");
        });
    },
    scrollButtom() {
      let sumH =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      let viewH = document.body.clientHeight;
      let scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (viewH + sumH >= scrollH) {
        this.getTopics();
      }
    },
  },
};
</script>

<style scoped>
.text_centent {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 #0000001a;
}
.centent {
  margin-top: 40px;
}
</style>