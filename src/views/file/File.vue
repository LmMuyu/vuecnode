<template>
  <div>
    <HeadTitle />
    <FileAuthorInfo />
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";

import FileAuthorInfo from "./childcomp/FileAuthorInfo";

import { getUserByName } from "@/utils/file";

export default {
  components: {
    FileAuthorInfo,
    HeadTitle,
  },
  props: {
    loginname: String,
  },
  created() {
    this.getUserByName(this.loginname);
  },
  methods: {
    getUserByName(loginname) {
      getUserByName(loginname)
        .then(({ data: { data } }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>